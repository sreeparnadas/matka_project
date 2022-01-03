import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServerResponse} from '../models/ServerResponse.model';
import {GameResult} from '../models/GameResult.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class GameResultService {

  private BASE_API_URL = environment.BASE_API_URL;
  resultList: GameResult[] = [];
  resultSubject = new Subject<GameResult[]>();

  currentResultList: GameResult[] = [];
  currentResultSubject = new Subject<GameResult[]>();

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.http.get(this.BASE_API_URL + '/dev/results/1').subscribe((response: ServerResponse) => {
        this.resultList = response.data;
        this.resultSubject.next([...this.resultList]);
    });
  }


  getResultByCurrentDate(gameId){
    this.http.get(this.BASE_API_URL + '/dev/results/currentDate/'+gameId).subscribe((response: ServerResponse) => {
      this.currentResultList = response.data.result;
      // console.log(this.currentResultList);
      this.currentResultSubject.next([...this.currentResultList]);
    });
  }
  getResultByCurrentDateListener(){
    return this.currentResultSubject.asObservable();
  }

  getResultList(){
    return[...this.resultList];
  }
  getResultListListener(){
    return this.resultSubject.asObservable();
  }

  getUpdatedResult(){
    this.http.get(this.BASE_API_URL + '/dev/results/1').subscribe((response: ServerResponse) => {
      this.resultList = response.data;
      this.resultSubject.next([...this.resultList]);
    });
  }

  // getSelectedGamedResult(data){
  //   this.http.get(this.BASE_API_URL + '/dev/results/' + data).subscribe((response: ServerResponse) => {
  //     this.resultList = response.data;
  //     this.resultSubject.next([...this.resultList]);
  //   });
  // }

  getSelectedGamedResult(data){
    this.http.get(this.BASE_API_URL + '/dev/results/' + data).subscribe((response: ServerResponse) => {
      this.resultList = response.data;
      this.resultSubject.next([...this.resultList]);
    });
  }
}
