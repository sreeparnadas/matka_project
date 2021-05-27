import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ProjectData} from '../models/project-data.model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CommonService {
  deviceXs = false;
  projectData: ProjectData;
  projectDataSubject = new Subject<ProjectData>();
  private pictures: any;
  constructor(private http: HttpClient) {
    this.http.get('assets/ProjectData.json').subscribe((data: ProjectData) => {
      this.projectData = data;
      this.projectDataSubject.next({...this.projectData});
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
}
