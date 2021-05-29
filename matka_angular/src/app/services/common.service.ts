import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import {ProjectData} from '../models/project-data.model';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';
import {ServerResponse} from '../models/ServerResponse.model';
import {environment} from '../../environments/environment';
import {concatMap, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CommonService {


  value$ = new BehaviorSubject(20);
  currentTimeBehaviorSubject = new  BehaviorSubject(null);
  currentValue = 0;

  deviceXs = false;
  projectData: ProjectData;
  public serverTime: {hour: number, minute: number, second: number};
  serverTimeSubject = new Subject<{hour: number, minute: number, second: number}>();
  projectDataSubject = new Subject<ProjectData>();
  private pictures: any;
  private BASE_API_URL = environment.BASE_API_URL;

  public hour: number;
  public minute: number;
  public second: number;

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

    this.http.get(this.BASE_API_URL + '/serverTime').subscribe((response: {hour: number, minute: number, second: number}) => {
      this.serverTime = response;
      this.hour = this.serverTime.hour;
      this.minute = this.serverTime.minute;
      this.second = this.serverTime.second;
      this.serverTimeSubject.next(this.serverTime);
    });

    setInterval(() => {

      if (this.hour === 23 && this.minute === 59 && this.second > 58)   {
        this.hour = 0;
        this.minute = 0;
        this.second = 1;
      }
      if (this.second > 58 && this.minute === 59){
        this.minute = 0;
        this.second = 1;
        this.hour++;
        if (this.hour === 24){
          this.hour = 0;
        }
      }else if (this.second > 58){
        this.second = 0;
        this.minute++;
      }else{
        this.second++;
      }
      let currentTime = '';
      if (this.hour > 11){
        currentTime = ((this.hour - 12) < 10 ? '0' + (this.hour - 12) : (this.hour - 12)) + ':' +
          (this.minute < 10 ? '0' + this.minute : this.minute) + ':' + (this.second < 10 ? '0' + this.second : this.second) + 'PM';
      }else{
        currentTime = ((this.hour) < 10 ? '0' + (this.hour) : (this.hour)) + ':' + (this.minute < 10 ? '0' + this.minute : this.minute) +
          ':' + (this.second < 10 ? '0' + this.second : this.second) + 'AM';
      }

      this.currentTimeBehaviorSubject.next(currentTime);
      // just testing if it is working
    }, 1000);
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

  loadValue(i) {
    this.currentValue += i;
    this.value$.next(this.currentValue);
    console.log(this.currentValue);
  }
}
