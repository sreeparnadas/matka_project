import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServerResponse} from '../models/ServerResponse.model';
import {DrawTime} from '../models/DrawTime.model';
import {Subject} from 'rxjs';
import {ErrorService} from './error.service';
import {catchError, tap} from 'rxjs/operators';

export interface ManualResultSaveResponse{
  success: number;
  data: {
    manualResultId: number,
    drawMaster: object,
    numberCombination: object,
    single: object,
    gameDate: string
  };
  error?: any;
}

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ManualResultService {

  drawTimes: DrawTime[] = [];
  drawTimeSubject = new Subject<DrawTime[]>();
  private BASE_API_URL = environment.BASE_API_URL;


  constructor(private http: HttpClient, private errorService: ErrorService) {

    // get all draw time
    this.http.get(this.BASE_API_URL + '/drawTimes').subscribe((response: ServerResponse) => {
      this.drawTimes = response.data;
      this.drawTimeSubject.next([...this.drawTimes]);
    });
  }

  getAllDrawTimes(){
    return [...this.drawTimes];
  }

  getAllDrawTimesListener(){
    return this.drawTimeSubject.asObservable();
  }

  saveManualResult(formData){
    return this.http.post<ManualResultSaveResponse>(this.BASE_API_URL + '/manualResult', formData)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        console.log(response);
      }));
  }
}
