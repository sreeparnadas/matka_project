import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {ServerResponse} from '../models/ServerResponse.model';
import { GameType } from '../models/GameType.model';
import {environment} from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class GameTypeService {
  private BASE_API_URL = environment.BASE_API_URL;
  gameTypes: GameType[] = [];
  gameTypeSubject = new Subject<GameType[]>();

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/gameTypes').subscribe((response: ServerResponse) => {
      this.gameTypes = response.data;
      this.gameTypeSubject.next([...this.gameTypes]);
    });
  }

  getGameType(){
    return [...this.gameTypes];
  }

  getGameTypeListener(){
    return this.gameTypeSubject.asObservable();
  }
}
