import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';
import {ProjectData} from '../models/project-data.model';
import {GameResultService} from './game-result.service';
import {GameResult} from '../models/GameResult.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class WatchDrawService {

  private BASE_API_URL = environment.BASE_API_URL;
  private nextDrawId: any;
  nextDrawSubject = new Subject<number>();
  resultList: GameResult[] = [];

  constructor(private http: HttpClient, private gameResultService: GameResultService) {

    setInterval(() => {
      this.http.get(this.BASE_API_URL + '/dev/nextDrawId').subscribe((response) => {

        // tslint:disable-next-line:triple-equals
        if (this.nextDrawId != response){
          this.nextDrawId = response;
          this.nextDrawSubject.next(this.nextDrawId);
          this.resultList = this.gameResultService.getResultList();
          console.log('resultList===', this.resultList);
        }
      });
    }, 10000);
  }

  getNextDraw(){
    return {...this.nextDrawId};
  }
}
