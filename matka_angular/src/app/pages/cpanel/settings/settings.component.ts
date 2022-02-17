import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  games: Game[];
  selectedGame = null;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGame();
    this.gameService.getGameListener().subscribe((response: Game[]) => {
      this.games = response;
    });
  }

  changeAutoGenerate(x){
    this.gameService.updateAutoGenerate(x.id);
  }

  activateGame(x){
    this.gameService.activateActive(x.id);
  }

}
