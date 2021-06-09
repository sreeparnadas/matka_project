import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServerResponse} from '../models/ServerResponse.model';
import {SingleNumber} from '../models/SingleNumber.model';
import {Subject} from 'rxjs';
import {NumberCombinations} from '../models/NumberCombinations.model';
import {catchError, tap} from 'rxjs/operators';
import {ErrorService} from './error.service';
import {GameInputSaveResponse} from '../models/GameInputSaveResponse.model';
import {DrawTime} from '../models/DrawTime.model';
import {GameResult} from '../models/GameResult.model';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PlayGameService {
  singleNumbers: SingleNumber[] = [];
  singleNumberSubject = new Subject<SingleNumber[]>();
  numberCombinationMatrix: SingleNumber[] = [];
  numberCombinationMatrixSubject = new Subject<SingleNumber[]>();
  currentDateResult: GameResult[] = [];
  currentDateResultSubject = new Subject<GameResult[]>();
  // activeDrawTime: DrawTime;
  // activeDrawTimeSubject = new Subject<DrawTime>();
  private BASE_API_URL = environment.BASE_API_URL;



  constructor(private http: HttpClient, private errorService: ErrorService) {
    // get single numbers
      this.http.get(this.BASE_API_URL + '/singleNumbers').subscribe((response: ServerResponse) => {
        this.singleNumbers = response.data;
        this.singleNumberSubject.next([...this.singleNumbers]);
      });

      this.http.get(this.BASE_API_URL + '/numberCombinations/matrix').subscribe((response: ServerResponse) => {
        this.numberCombinationMatrix = response.data;
        this.numberCombinationMatrixSubject.next([...this.numberCombinationMatrix]);
      });

      this.http.get(this.BASE_API_URL + '/results/currentDate').subscribe((response: ServerResponse) => {
       this.currentDateResult = response.data;
       this.currentDateResultSubject.next([...this.currentDateResult]);
      });

    // get active draw
    //   this.http.get(this.BASE_API_URL + '/drawTimes/active').subscribe((response: ServerResponse) => {
    //     this.activeDrawTime = response.data;
    //     this.activeDrawTimeSubject.next({...this.activeDrawTime});
    //   });

  }

  getSingleNumbers(){
    return [...this.singleNumbers];
  }
  getSingleNumberListener(){
    return this.singleNumberSubject.asObservable();
  }

  getNumberCombinationMatrix(){
    return [...this.numberCombinationMatrix];
  }
  getNumberCombinationMatrixListener(){
    return this.numberCombinationMatrixSubject.asObservable();
  }

  getCurrentDateResult(){
    return {...this.currentDateResult};
  }
  getCurrentDateResultListener(){
    return this.currentDateResultSubject.asObservable();
  }
  // getActiveDrawTime(){
  //   return {...this.activeDrawTime};
  // }
  // getActiveDrawTimeListener(){
  //   return this.activeDrawTimeSubject.asObservable();
  // }

  saveUserPlayInputDetails(inputData){

    return this.http.post<GameInputSaveResponse>(this.BASE_API_URL + '/buyTicket', inputData)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        console.log('service ', response);
    }));
  }
}
