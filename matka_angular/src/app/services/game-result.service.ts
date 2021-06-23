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
  constructor(private http: HttpClient) {
    // @ts-ignore
    this.http.get(this.BASE_API_URL + '/dev/results').subscribe((response: ServerResponse) => {
        this.resultList = response.data;
        this.resultSubject.next([...this.resultList]);
    });
  }

  getResultList(){
    return[...this.resultList];
  }
  getResultListListener(){
    return this.resultSubject.asObservable();
  }

  getUpdatedResult(){
    this.http.get(this.BASE_API_URL + '/dev/results').subscribe((response: ServerResponse) => {
      this.resultList = response.data;
      this.resultSubject.next([...this.resultList]);
    });
  }
}
