import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {ServerResponse} from '../models/ServerResponse.model';
import {GameType} from '../models/GameType.model';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {PayoutSetting} from '../models/PayoutSetting.model';



@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PayoutSettingService {
  private BASE_API_URL = environment.BASE_API_URL;
  gameTypes: GameType[] = [];

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/gameTypes').subscribe((response: ServerResponse) => {
      this.gameTypes = response.data;
    });
   }

  updatePayout(gameType){
    return this.http.put<PayoutSetting>(this.BASE_API_URL + '/cPanel/game/payout', gameType)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }
}
