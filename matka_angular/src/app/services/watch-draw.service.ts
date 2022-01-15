import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';
import {GameResultService} from './game-result.service';
import {PlayGameService} from './play-game.service';
import {NextDrawId} from '../models/NextDrawId.model';
import {User} from '../models/user.model';
import {CommonService} from './common.service';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class WatchDrawService {

  private BASE_API_URL = environment.BASE_API_URL;
  private nextDrawId: NextDrawId = {};
  nextDrawSubject = new Subject<NextDrawId>();

  constructor(private http: HttpClient, private gameResultService: GameResultService, private playGameService: PlayGameService
              // tslint:disable-next-line:align
              , private commonService: CommonService) {

    const userData: User = JSON.parse(localStorage.getItem('user'));
    setInterval(() => {
      this.http.get(this.BASE_API_URL + '/dev/nextDrawId').subscribe((response: NextDrawId) => {

        if (Object.entries(this.nextDrawId).length === 0){
          this.nextDrawId = response;
          this.nextDrawSubject.next({...this.nextDrawId});
          if (userData == null){
            this.gameResultService.getUpdatedResult();
          }else{
            this.gameResultService.getUpdatedResult();
            this.playGameService.getTodayLastResult();
            this.playGameService.getTodayResult();
          }

        // }else if (this.nextDrawId.data.id !== response.data.id) {
        //   this.nextDrawId = response;
        //   this.nextDrawSubject.next({...this.nextDrawId});
        //   if (userData == null){
        //     this.gameResultService.getUpdatedResult();
        //   }else{
        //     // this.gameResultService.getUpdatedResult();
        //     this.gameResultService.getSelectedGamedResult(1);
        //     this.playGameService.getTodayLastResult();
        //     // this.playGameService.getTodayResult();
        //     this.gameResultService.getResultByCurrentDate(1);
        //     this.commonService.getActiveServerDrawTime();
        //   }
        // }

        }else {
          if (userData == null){
            this.gameResultService.getUpdatedResult();
          }else {
            if (this.nextDrawId.data[0].id !== response.data[0].id) {
              this.gameResultService.getSelectedGamedResult(this.nextDrawId.data[0].game_id);
              this.gameResultService.getResultByCurrentDate(this.nextDrawId.data[0].game_id);
              this.commonService.getActiveServerDrawTime(this.nextDrawId.data[0].game_id);
              this.nextDrawId = response;
            } else if (this.nextDrawId.data[1].id !== response.data[1].id) {
              this.gameResultService.getSelectedGamedResult(this.nextDrawId.data[1].game_id);
              this.gameResultService.getResultByCurrentDate(this.nextDrawId.data[1].game_id);
              this.commonService.getActiveServerDrawTime(this.nextDrawId.data[1].game_id);
              this.nextDrawId = response;
            } else if (this.nextDrawId.data[2].id !== response.data[2].id) {
              this.gameResultService.getSelectedGamedResult(this.nextDrawId.data[2].game_id);
              this.gameResultService.getResultByCurrentDate(this.nextDrawId.data[2].game_id);
              this.commonService.getActiveServerDrawTime(this.nextDrawId.data[2].game_id);
              this.nextDrawId = response;
            } else if (this.nextDrawId.data[3].id !== response.data[3].id) {
              this.gameResultService.getSelectedGamedResult(this.nextDrawId.data[3].game_id);
              this.gameResultService.getResultByCurrentDate(this.nextDrawId.data[3].game_id);
              this.commonService.getActiveServerDrawTime(this.nextDrawId.data[3].game_id);
              this.nextDrawId = response;
            }
            this.nextDrawSubject.next({...this.nextDrawId});
          }
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
