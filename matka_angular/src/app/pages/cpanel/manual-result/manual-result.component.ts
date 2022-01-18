import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DrawTime} from '../../../models/DrawTime.model';
import {ManualResultService} from '../../../services/manual-result.service';
import {SingleNumber} from '../../../models/SingleNumber.model';
import {PlayGameService} from '../../../services/play-game.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import Swal from 'sweetalert2';
import {environment} from '../../../../environments/environment';
import {DatePipe, formatDate} from '@angular/common';
import {ServerResponse} from '../../../models/ServerResponse.model';
import {HttpClient} from '@angular/common/http';
import {MatCard} from '@angular/material/card';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {CommonService} from '../../../services/common.service';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/Game.model';
import { AdminReportService } from 'src/app/services/admin-report.service';
import { GameInputLoad } from 'src/app/models/GameInputLoad.model';
// import { Moment } from 'moment';
// const moment = _moment;

@Component({
  selector: 'app-manual-result',
  templateUrl: './manual-result.component.html',
  styleUrls: ['./manual-result.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class ManualResultComponent implements OnInit {
  private BASE_API_URL = environment.BASE_API_URL;
  manualResultForm: FormGroup;
  oldDateResultForm: FormGroup;
  drawTimes: DrawTime[] = [];
  public numberCombinationMatrix: SingleNumber[] = [];
  private copyNumberMatrix: SingleNumber[];
  currentCombinationMatrixSelectedId: number;
  currentState = 'initial';
  private validatorError: any;
  isProduction = environment.production;
  showDevArea = false;
  deviceXs: boolean;
  isDisabledSingleHeaderButton: boolean = true;
  selectedGame: number;

  thisYear = new Date().getFullYear();
  thisMonth = new Date().getMonth();
  thisDay = new Date().getDate();
  startDate = new Date(this.thisYear, this.thisMonth, this.thisDay);

  StartDateFilter = this.startDate;
  newDateFilter = this.startDate;
  EndDateFilter = this.startDate;
  pipe = new DatePipe('en-US');

  oldDateReultDrawTime: any;

  selectedNumberCombination = null;
  requestedData = [];

  columnNumber = 10;



  games: Game[] ;

  inputLoad: GameInputLoad[];

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private manualResultService: ManualResultService, private gameService: GameService
              // tslint:disable-next-line:align
              , private playGameService: PlayGameService
              // tslint:disable-next-line:align
              , private route: ActivatedRoute
              // tslint:disable-next-line:align
              , private router: Router
              // tslint:disable-next-line:align
              , private commonService: CommonService
              , private adminReportService: AdminReportService) {
    this.deviceXs = this.commonService.deviceXs;
    const now = new Date();
    const currentSQLDate = formatDate(now, 'yyyy-MM-dd', 'en');
    this.manualResultForm = new FormGroup({
      id: new FormControl(null),
      drawMasterId: new FormControl(null, [Validators.required]),
      numberCombinationId: new FormControl(null, [Validators.required]),
      gameId: new FormControl(null, [Validators.required]),
      single: new FormControl(null),
      triple: new FormControl(null),
      transaction_date: new FormControl(currentSQLDate),
    });

    this.oldDateResultForm = new FormGroup({
      id: new FormControl(null),
      drawMasterId: new FormControl(null, [Validators.required]),
      numberCombinationId: new FormControl(null, [Validators.required]),
      single: new FormControl(null),
      triple: new FormControl(null),
      gameId: new FormControl(null, [Validators.required]),
      gameDate: new FormControl(this.startDate),
    });
  }



  ngOnInit(): void {
      // this.drawTimes = this.manualResultService.getAllDrawTimes();
      // this.manualResultService.getAllDrawTimesListener().subscribe((response: DrawTime[]) => {
      //   this.drawTimes = response;
      // });


    this.manualResultForm.patchValue({gameId:1});
    this.oldDateResultForm.patchValue({gameId:1});
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data =>
      console.log('data', data)
    );

    this.selectedGame = 1;

    const now = new Date();
    // const currentSQLDate = formatDate(now, 'yyyy-MM-dd', 'en');
    // this.http.get(this.BASE_API_URL + '/drawTimes/dates/' + currentSQLDate).subscribe((response: ServerResponse) => {
    //     this.drawTimes = response.data;
    //   });

    this.fetchDrawTime(this.selectedGame);

    this.numberCombinationMatrix = this.playGameService.getNumberCombinationMatrix();
        // this.numberCombinationMatrix  = JSON.parse(JSON.stringify(this.copyNumberMatrix));
    this.playGameService.getNumberCombinationMatrixListener().subscribe((response: SingleNumber[]) => {
        this.numberCombinationMatrix = response;
        this.copyNumberMatrix  = JSON.parse(JSON.stringify(this.numberCombinationMatrix));
      });


    this.games = this.gameService.getGame();
    this.gameService.getGameListener().subscribe((response: Game[]) => {
      this.games = response;
      // console.log('ts',this.games);
    });
    // console.log(this.games);
  }

  fetchDrawTime(gameID){
    this.http.get(this.BASE_API_URL + '/drawTimes/dates/' + gameID).subscribe((response: ServerResponse) => {
      this.drawTimes = response.data;
    });
  }


  iscurrentCombinationMatrixSelected(id: number){
    return (id === this.currentCombinationMatrixSelectedId);
  }

  setManualResultInForm(single: number, numberCombination){
    // tslint:disable-next-line:max-line-length
    this.manualResultForm.patchValue({numberCombinationId: numberCombination.numberCombinationId, single, triple: numberCombination.visibleTripleNumber});
    this.currentCombinationMatrixSelectedId = numberCombination.numberCombinationId;
  }

  setOldDateResultInForm(single: number, numberCombination){
    // tslint:disable-next-line:max-line-length
    this.oldDateResultForm.patchValue({numberCombinationId: numberCombination.numberCombinationId, single, triple: numberCombination.visibleTripleNumber});
    this.currentCombinationMatrixSelectedId = numberCombination.numberCombinationId;
    this.selectedNumberCombination= numberCombination.visibleTripleNumber;
    // console.log(numberCombination);
  }


  getTrippleButtonStyle() {
    return {
      'background-color': 'red !important'
    };
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  changeDraw(){
    this.fetchDrawTime(this.manualResultForm.value.gameId);
  }


  saveManualResult(){

    this.validatorError = null;
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to save this result?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save It!'
    }).then((result) => {
      if (result.isConfirmed){
        this.manualResultService.saveManualResult(this.manualResultForm.value).subscribe(response => {
          if (response.success === 1){
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Result saved',
              showConfirmButton: false,
              timer: 1000
            });
            this.manualResultForm.reset();
            this.currentCombinationMatrixSelectedId = -1;
          }else{
            this.validatorError = response.error;
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Validation error',
              showConfirmButton: false,
              timer: 3000
            });
          }
        }, (error) => {
          // when error occured
          console.log('data saving error', error);
        });
      }
    });
  }


saveOldDateResult(){

    var startDate = this.pipe.transform(this.newDateFilter, 'yyyy-MM-dd');
    this.oldDateResultForm.value.gameDate = startDate;
    this.validatorError = null;
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to save this result?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save It!'
    }).then((result) => {
      if (result.isConfirmed){
        this.manualResultService.saveOldDateResult(this.oldDateResultForm.value).subscribe(response => {
          if (response.success === 1){
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Result saved',
              showConfirmButton: false,
              timer: 1000
            });
            this.oldDateResultForm.reset();
            this.selectedNumberCombination=null;
            this.currentCombinationMatrixSelectedId = -1;
            this.oldDateReultDrawTime.splice(response.data,1);
          }else{
            this.validatorError = response.error;
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Validation error',
              showConfirmButton: false,
              timer: 3000
            });
          }
        }, (error) => {
          // when error occured
          console.log('data saving error', error);
        });
      }
    });
  }

  getDrawTimeForOldResult(event) {
    const selectedDateForOldResult = this.pipe.transform(event.value,'yyyy-MM-dd') ;
    let currentDate= this.pipe.transform(this.startDate, 'yyyy-MM-dd');
    if(selectedDateForOldResult < currentDate){
      var requestedData = {
        gameId : this.oldDateResultForm.value.gameId,
        gameDate : this.pipe.transform(selectedDateForOldResult, 'yyyy-MM-dd'),
      };
      this.manualResultService.fetchRemainingDrawTimesToPutOldResult(requestedData).subscribe(response =>{
        this.oldDateReultDrawTime = response.data;
      });
    }else{
      this.oldDateReultDrawTime = [];
    }

  }

  getGameInputLoad() {
      var requestedData = {
        gameId : this.manualResultForm.value.gameId,
        drawId : this.manualResultForm.value.drawMasterId,
      };
      this.manualResultService.showInputLoadGameWise(requestedData).subscribe(response =>{
        this.inputLoad = response.data;
      });
  }

  gameDatepickerChange($event: Event) {
    // getting game after date change
    const currentSQLDate = formatDate(this.manualResultForm.value.transaction_date, 'yyyy-MM-dd', 'en');
    this.http.get(this.BASE_API_URL + '/drawTimes/dates/' + currentSQLDate).subscribe((response: ServerResponse) => {
      this.drawTimes = response.data;
    });
  }


  searchByDateTab1(){
    Swal.fire({
      title: 'Please Wait !',
      html: 'loading ...',// add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    var startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
    // var endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');
    this.manualResultService.saveOldDateResult(startDate).subscribe((response)=>{
      if(response.data){
        Swal.close();
      }
    });
  }

}
