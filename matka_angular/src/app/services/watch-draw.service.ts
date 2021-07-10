import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';
import {ProjectData} from '../models/project-data.model';
import {GameResultService} from './game-result.service';
import {GameResult} from '../models/GameResult.model';
import {ServerResponse} from '../models/ServerResponse.model';
import {PlayGameService} from './play-game.service';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class WatchDrawService {

  private BASE_API_URL = environment.BASE_API_URL;
  private nextDrawId: any;
  nextDrawSubject = new Subject<number>();

  constructor(private http: HttpClient, private gameResultService: GameResultService, private playGameService: PlayGameService) {

    setInterval(() => {
      this.http.get(this.BASE_API_URL + '/dev/nextDrawId').subscribe((response: any) => {

        // tslint:disable-next-line:triple-equals
        if (this.nextDrawId != response){
          this.nextDrawId = response;
          this.nextDrawSubject.next(this.nextDrawId);
          this.gameResultService.getUpdatedResult();
          this.playGameService.getTodayResult();
        }
      });
    }, 10000);
  }


  getNextDraw(){
    return {...this.nextDrawId};
  }
  getNextDrawListener(){
    return this.nextDrawSubject.asObservable();
  }
}
