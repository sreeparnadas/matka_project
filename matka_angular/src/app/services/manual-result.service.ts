import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalVariable} from '../shared/global';
import {ServerResponse} from '../models/ServerResponse.model';
import {DrawTime} from '../models/DrawTime.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ManualResultService {

  drawTimes: DrawTime[] = [];
  drawTimeSubject = new Subject<DrawTime[]>();
  constructor(private http: HttpClient) {
    // get all draw time
    this.http.get(GlobalVariable.BASE_API_URL + '/drawTimes').subscribe((response: ServerResponse) => {
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

}
