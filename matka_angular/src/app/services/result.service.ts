import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CurrentGameResult} from '../models/CurrentGameResult.model';
import { Subject } from 'rxjs';
import {ErrorService} from './error.service';
import {AuthService} from './auth.service';
import {ServerResponse} from '../models/ServerResponse.model';





@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ResultService {

  private BASE_API_URL = environment.BASE_API_URL;
  currentDateResult: CurrentGameResult;
  currentDateResultSubject = new Subject<CurrentGameResult>();

  constructor(private http: HttpClient, private errorService: ErrorService, private authService: AuthService) {
    this.http.get(this.BASE_API_URL + '/results/currentDate').subscribe((response: ServerResponse) => {
        this.currentDateResult = response.data;
        this.currentDateResultSubject.next({...this.currentDateResult});
      });
  }

  getCurrentDateResult(){
    return {...this.currentDateResult};
  }
  getCurrentDateResultListener(){
    return this.currentDateResultSubject.asObservable();
  }
}
