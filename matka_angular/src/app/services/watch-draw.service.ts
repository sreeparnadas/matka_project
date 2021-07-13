import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';
import {GameResultService} from './game-result.service';
import {PlayGameService} from './play-game.service';
import {NextDrawId} from '../models/NextDrawId.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class WatchDrawService {

  private BASE_API_URL = environment.BASE_API_URL;
  private nextDrawId: NextDrawId = {};
  nextDrawSubject = new Subject<NextDrawId>();

  constructor(private http: HttpClient, private gameResultService: GameResultService, private playGameService: PlayGameService) {

    const userData: User = JSON.parse(localStorage.getItem('user'));
    setInterval(() => {
      this.http.get(this.BASE_API_URL + '/dev/nextDrawId').subscribe((response: NextDrawId) => {

        if (Object.entries(this.nextDrawId).length === 0){
          this.nextDrawId = response;
          this.nextDrawSubject.next({...this.nextDrawId});
          if (userData == null){
            this.gameResultService.getUpdatedResult();
          }else{
            this.playGameService.getTodayLastResult();
            this.playGameService.getTodayResult();
          }


        }else if (this.nextDrawId.data.id !== response.data.id) {
          this.nextDrawId = response;
          this.nextDrawSubject.next({...this.nextDrawId});
          if (userData == null){
            this.gameResultService.getUpdatedResult();
          }else{
            this.playGameService.getTodayLastResult();
            this.playGameService.getTodayResult();
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
