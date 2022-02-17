import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {ServerResponse} from '../models/ServerResponse.model';
import { GameType } from '../models/GameType.model';
import {environment} from '../../environments/environment';
import { Subject } from 'rxjs';
import { Game } from '../models/Game.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class GameService {
  private BASE_API_URL = environment.BASE_API_URL;
  gameTypes: GameType[] = [];
  games: Game[] = [];
  gameTypeSubject = new Subject<GameType[]>();
  gameSubject = new Subject<Game[]>();


  constructor(private  http: HttpClient, private errorService: ErrorService) {
    // this.http.get(this.BASE_API_URL + '/gameTypes').subscribe((response: ServerResponse) => {
    //   this.gameTypes = response.data;
    //   this.gameTypeSubject.next([...this.gameTypes]);
    // });
    this.http.get(this.BASE_API_URL + '/dev/getGame').subscribe((response: ServerResponse) =>{
      this.games = response.data;
      this.gameSubject.next([...this.games]);
    });


  }

  getGameType(){
    return [...this.gameTypes];
  }

  getGameTypeListener(){
    return this.gameTypeSubject.asObservable();
  }

  updateAutoGenerate(gameId){
    this.http.get(this.BASE_API_URL + '/dev/updateAutoGenerate/' + gameId).subscribe((response: ServerResponse) => {
      const game = response.data;
      const index = this.games.findIndex(x => x.id === game.id);
      this.games[index] = game;
      this.gameSubject.next([...this.games]);
    });
  }

  activateActive(gameId){
    this.http.get(this.BASE_API_URL + '/dev/activateGame/' + gameId).subscribe((response: ServerResponse) => {
      const game = response.data;
      const index = this.games.findIndex(x => x.id === game.id);
      this.games[index] = game;
      this.gameSubject.next([...this.games]);
    });
  }


  getGame(){
    return [...this.games];
  }

  getGameListener(){
    return this.gameSubject.asObservable();
  }
}
