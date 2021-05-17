import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ProjectData} from '../models/project-data.model';




@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CommonService {

  projectData: ProjectData = {colorScheme: 'dark-mode'};
  projectDataSubject = new Subject<ProjectData>();
  constructor() {

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
}
