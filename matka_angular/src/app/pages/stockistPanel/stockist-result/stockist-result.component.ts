import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/GameResult.model';
import { TodayLastResult } from 'src/app/models/TodayLastResult.model';
import { CommonService } from 'src/app/services/common.service';
import { PlayGameService } from 'src/app/services/play-game.service';
import { ResultService } from 'src/app/services/result.service';
import {DatePipe} from "@angular/common";
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/Game.model';
import { GameResultService } from 'src/app/services/game-result.service';

@Component({
  selector: 'app-stockist-result',
  templateUrl: './stockist-result.component.html',
  styleUrls: ['./stockist-result.component.scss']
})
export class StockistResultComponent implements OnInit {

  todayLastResult: TodayLastResult;
  public currentDateResult: any[];
  public resultByDate: GameResult;
  result: GameResult[];
  currentResult: any[]=[];
  selectedGame: number;
  games: Game[];


  thisYear = new Date().getFullYear();
  thisMonth = new Date().getMonth();
  thisDay = new Date().getDate();
  startDate = new Date(this.thisYear, this.thisMonth, this.thisDay);
  pipe = new DatePipe('en-US');


  buttonColours: string = '#0047AB';
  buttonColours_1: string = '#009900';
  buttonColours_2: string = '#CC0033';
  buttonColours_3: string = '#9900CC';
  buttonColour=['#0047AB', '#009900','#CC0033', '#9900CC'];

  resultList: GameResult[] = [];







  constructor(private playGameService: PlayGameService, private commonService: CommonService, private resultService: ResultService
              , private gameService: GameService
              ,private gameResultService: GameResultService) {
    this.playGameService.getTodayLastResultListener().subscribe(response => {
      this.todayLastResult = response;
    });
    this.searchResultByDate();
  }

  ngOnInit(): void {

    this.selectedGame = 1;

    this.games = this.gameService.getGame()
    this.gameService.getGameListener().subscribe((response: Game[]) => {
      this.games = response;

      this.resultList = this.gameResultService.getResultList();
    this.gameResultService.getResultListListener().subscribe((response: GameResult[]) => {
      this.resultList = response;
    });
    });



    // this.currentDateResult = this.playGameService.getCurrentDateResult();
    // this.playGameService.getCurrentDateResultListener().subscribe((response: CurrentGameResult) => {
    //   // @ts-ignore
    //   this.currentDateResult = response.result;
    //   console.log("ResultSheetComponent", this.currentDateResult);
    // });
    // console.log("ResultSheetComponent", this.currentDateResult);



    this.resultService.getResultByDateListener().subscribe((response: GameResult) => {
      this.resultByDate = response;
    });

    // @ts-ignore
    this.resultService.getResultListener().subscribe((response: GameResult[] )=>{
      this.result = response;
      // console.log(this.result);
    });
  }

  varResult(data){
    this.gameResultService.getSelectedGamedResult(data);
  }

  searchResultByDate(){
    let x = this.pipe.transform(this.startDate,'yyyy-MM-dd');
    // console.log(this.startDate);
    // console.log(x);
    this.resultService.getResultByDate(x).subscribe(response=>{
      // console.log('Component',response);
      // @ts-ignore

      this.result = response.data;
      // console.log(this.currentResult);
    });

  }

  setActiveGame(gameData) {
    // console.log(gameData);
    this.selectedGame = gameData.id;
    // this.bgColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    this.buttonColours = this.buttonColour[gameData.id-1];
  }


}
