import { Injectable } from '@angular/core';
import {Subject} from "rxjs";



export class VariableSettings{
  colorScheme: string;
}


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CommonService {

  variableSettings: VariableSettings;
  variableSettingsSubject = new Subject<VariableSettings>();
  constructor() {
    this.variableSettings.colorScheme = 'red';
  }
  getVariableSettings(){
    return {...this.variableSettings};
  }
  getVariableSettingsListener(){
    return this.variableSettingsSubject.asObservable();
  }
  updateVariableSettings(variableSettings: VariableSettings){
    this.variableSettings = variableSettings;
    this.variableSettingsSubject.next({...this.variableSettings});
  }
}
