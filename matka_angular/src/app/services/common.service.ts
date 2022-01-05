import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import {ProjectData} from '../models/project-data.model';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';
import {ServerResponse} from '../models/ServerResponse.model';
import {environment} from '../../environments/environment';
import {catchError, concatMap, tap} from 'rxjs/operators';
import {DrawTime} from '../models/DrawTime.model';
import {CPanelCustomerSaleReport} from "../models/CPanelCustomerSaleReport.model";



@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CommonService {


  value$ = new BehaviorSubject(20);
  currentTimeBehaviorSubject = new  BehaviorSubject(null);
  remainingTimeBehaviorSubject = new  BehaviorSubject(null);
  currentValue = 0;


  deviceXs = false;
  projectData: ProjectData;
  public serverTime: {hour: number, minute: number, second: number, 'meridiem': string};
  public currentTimeObj: {hour: number, minute: number, second: number, 'meridiem': string};
  serverTimeSubject = new Subject<{hour: number, minute: number, second: number, 'meridiem': string}>();
  projectDataSubject = new Subject<ProjectData>();
  private pictures: any;
  private BASE_API_URL = environment.BASE_API_URL;

  activeDrawTime: DrawTime;
  activeDrawTimeSubject = new Subject<DrawTime>();

  constructor(private http: HttpClient) {

    setInterval(() => {
      this.currentValue += 10;
      this.value$.next(this.currentValue);
      // just testing if it is working
    }, 1000);



    this.http.get('assets/ProjectData.json').subscribe((data: ProjectData) => {
      this.projectData = data;
      this.projectDataSubject.next({...this.projectData});
    });

    this.http.get(this.BASE_API_URL + '/serverTime')
      .subscribe((response: {hour: number, minute: number, second: number, 'meridiem': string}) => {
      this.serverTime = response;
      this.currentTimeObj = this.serverTime;
      this.serverTimeSubject.next(this.serverTime);
    });

    setInterval(() => {

      if (this.currentTimeObj.hour === 23 && this.currentTimeObj.minute === 59 && this.currentTimeObj.second > 58)   {
        this.currentTimeObj.hour = 0;
        this.currentTimeObj.minute = 0;
        this.currentTimeObj.second = 1;
      }
      if (this.currentTimeObj.second > 58 && this.currentTimeObj.minute === 59){
        this.currentTimeObj.minute = 0;
        this.currentTimeObj.second = 1;
        this.currentTimeObj.hour++;
        if (this.currentTimeObj.hour === 24){
          this.currentTimeObj.hour = 0;
        }
      }else if (this.currentTimeObj.second > 58){
        this.currentTimeObj.second = 0;
        this.currentTimeObj.minute++;
      }else{
        this.currentTimeObj.second++;
      }
      let currentTime = '';
      let tempHour = this.currentTimeObj.hour < 10 ? '0' + this.currentTimeObj.hour : this.currentTimeObj.hour;
      const tempMinute = this.currentTimeObj.minute < 10 ? '0' + this.currentTimeObj.minute : this.currentTimeObj.minute;
      const tempSecond = this.currentTimeObj.second < 10 ? '0' + this.currentTimeObj.second : this.currentTimeObj.second;
      const tempMeridiem = this.currentTimeObj.meridiem;
      if (this.currentTimeObj.hour > 12){
        tempHour = this.currentTimeObj.hour - 12;
        tempHour = tempHour < 10 ? '0' + tempHour : tempHour;
        currentTime = tempHour + ':' + tempMinute + ':' + tempSecond + '' + tempMeridiem;
      }else{
        currentTime = tempHour + ':' + tempMinute + ':' + tempSecond + '' + tempMeridiem;
      }


      // @ts-ignore
      let remainingHour = this.activeDrawTime.endTime.split(":")[0]-this.currentTimeObj.hour;
      // @ts-ignore
      let remainingMin = Math.abs(this.currentTimeObj.minute - this.activeDrawTime.endTime.split(":")[1]);
      // @ts-ignore
      let remainingSec = Math.abs(60-(this.currentTimeObj.second-this.activeDrawTime.endTime.split(":")[2]));

      // @ts-ignore
      let remainingTime = remainingHour + ':' + remainingMin + ':' + remainingSec;

      // console.log('rm_mn: '+ remainingMin , 'rem_sec' + remainingSec);

      // if(remainingMin<=1){
      //   this.updateTerminalCancellation().subscribe();
      // }

      this.currentTimeBehaviorSubject.next(currentTime);
      this.remainingTimeBehaviorSubject.next(remainingTime);
      // just testing if it is working
    }, 1000);



    // this.updateTerminalCancellation().subscribe();


    // get active draw
    this.http.get(this.BASE_API_URL + '/dev/drawTimes/active/1').subscribe((response: ServerResponse) => {
      this.activeDrawTime = response.data;
      this.activeDrawTimeSubject.next({...this.activeDrawTime});
    });
  }

  gameDrawTime(game_id){
    this.http.get(this.BASE_API_URL + '/dev/drawTimes/active/' + game_id).subscribe((response: ServerResponse) => {
      this.activeDrawTime = response.data;
      this.activeDrawTimeSubject.next({...this.activeDrawTime});
    });
  }

  getServerTime(){
    return {...this.serverTime};
  }

  getServerTimeListener(){
    return this.serverTimeSubject.asObservable();
  }
  getProjectData(){
    return {...this.projectData};
  }
  getVariableSettingsListener(){
    return this.projectDataSubject.asObservable();
  }
  updateVariableSettings(projectData: ProjectData){
    this.projectData = projectData;
    this.projectDataSubject.next({...this.projectData});
  }
  setDeviceXs(dx: boolean){
    this.deviceXs = dx;
  }
  getDeviceXs(): boolean{
    return this.deviceXs;
  }
  getCurrentDate(){
    const now = new Date();
    const currentDate = formatDate(now, 'dd-MM-yyyy', 'en');
    return currentDate;
  }

  updateTerminalCancellation(){
    // @ts-ignore
    return this.http.post( this.BASE_API_URL + '/terminal/updateCancellation');
  }

  loadValue(i) {
    this.currentValue += i;
    this.value$.next(this.currentValue);
    // console.log(this.currentValue);
  }

  getActiveDrawTime(){
    return {...this.activeDrawTime};
  }
  getActiveDrawTimeListener(){
    return this.activeDrawTimeSubject.asObservable();
  }

  getActiveServerDrawTime(game_id){
    // get active draw
    this.http.get(this.BASE_API_URL + '/dev/drawTimes/active/' + game_id).subscribe((response: ServerResponse) => {
      this.activeDrawTime = response.data;
      this.activeDrawTimeSubject.next({...this.activeDrawTime});
    });
  }

}
