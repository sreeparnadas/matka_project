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
  currentValue = 0;

  deviceXs = false;
  projectData: ProjectData;
  public currentTime: object;
  projectDataSubject = new Subject<ProjectData>();
  private pictures: any;
  private BASE_API_URL = environment.BASE_API_URL;
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

    this.http.get(this.BASE_API_URL + '/serverTime').subscribe(response => {
      this.currentTime = response;
      // return this.currentTime;
    });
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

  getCurrentTime(){
    console.log('time in func', this.currentTime);
    const now = new Date();
    const hour = now.getHours();
    let meridiem = '';
    if (hour >= 12){
      meridiem = 'PM';
    }else{
      meridiem = 'AM';
    }
    const currentTime = formatDate(now, 'hh:mm:ss', 'en') + ' ' + meridiem;
    return currentTime;
  }

  loadValue(i) {
    this.currentValue += i;
    this.value$.next(this.currentValue);
    console.log(this.currentValue);
  }
}
