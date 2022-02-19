import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PlayGameService} from '../../services/play-game.service';
import {SingleNumber} from '../../models/SingleNumber.model';
import {CommonService} from '../../services/common.service';
import {ProjectData} from '../../models/project-data.model';
import {UserGameInput} from '../../models/userGameInput.model';
import * as cloneDeep from 'lodash/cloneDeep';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import Swal from 'sweetalert2';
import {formatDate} from '@angular/common';
import {DrawTime} from '../../models/DrawTime.model';
import {NgxPrinterService, PrintItem} from 'ngx-printer';
import {GameInputSaveResponse} from '../../models/GameInputSaveResponse.model';
import {NgxPrintModule} from 'ngx-print';
import { Game } from 'src/app/models/Game.model';
import {CurrentGameResult} from '../../models/CurrentGameResult.model';
import {WatchDrawService} from '../../services/watch-draw.service';
import {GameService} from '../../services/game.service';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import {NextDrawId} from '../../models/NextDrawId.model';
import {TodayLastResult} from '../../models/TodayLastResult.model';
import { GameResult } from 'src/app/models/GameResult.model';
import { GameResultService } from 'src/app/services/game-result.service';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel;
  seed = [...Array(10).keys()];
  idToLandOn: any;
  items: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;


  projectData: ProjectData;
  alwaysTime: number;
  showDeveloperDiv = true;
  user: User;
  singleNumbers: SingleNumber[] = [];
  numberCombinationMatrix: SingleNumber[] = [];
  activeDrawTime: DrawTime;
  chips: number[] = [];
  userGameInput: any[] = [];
  public totalTicketPurchased: number;
  currentDateResult: CurrentGameResult;

  games: Game[] ;
  selectedGame: number;
  todayLastResult: TodayLastResult;
  nextDrawId: NextDrawId;

  remainingTime: number;
  value: number;

  columnNumber = 5;
  columnNumber2 = 5;
  columnNumber3 = 1;

  bgColor: string = 'darkblue';

  gameBackgroundColorArr=['#00008B', '#133201','#B3032A', '#7C05AD'];

  public activeTripleContainerValue = 0;
  public selectedChip = 2;
  copyNumberMatrix: SingleNumber[];
  copySingleNumber: SingleNumber[];
  isProduction = environment.production;
  showDevArea = false;
  currentDate: string;
  deviceXs: boolean;

  currentResultList: GameResult[];


  public lastPurchasedTicketDetails: GameInputSaveResponse;
  public lastPurchasedTicketSingle: {singleNumber: number, quantity: number}[];
  public lastPurchasedTicketTriple: {visibleTripleNumber: number, quantity: number, singleNumber: number}[];

  constructor(private playGameService: PlayGameService, private commonService: CommonService, private authService: AuthService,
              private ngxPrinterService: NgxPrinterService, private renderer: Renderer2, private watchDrawService: WatchDrawService,
              private gameService: GameService, private gameResultService: GameResultService,
  ) {

    // this.renderer.setStyle(document.body, 'background-image', ' url("assets/images/curtain.jpg")');
    // this.renderer.setStyle(document.body.firstChild., 'background-image', ' url("assets/images/curtain.jpg")');
    const layer = document.querySelector('.layer');
    this.renderer.setStyle(layer, 'background-color', ' rgba(78, 180, 248, 0.1)');
    // this.renderer.listen(hello, 'click', console.log);
    this.currentDate = this.commonService.getCurrentDate();
    this.deviceXs = this.commonService.deviceXs;


    this.playGameService.getTodayLastResultListener().subscribe(response => {
      this.todayLastResult = response;
    });

    this.watchDrawService.getNextDrawListener().subscribe((response: NextDrawId) => {
      this.nextDrawId = response;
      // if (this.todayLastResult !== undefined){
      //   console.log(this.todayLastResult.data);
      //   this.spin(this.todayLastResult.data.single_number).then(r => {});
      // }
      setTimeout(() => {
        if (this.todayLastResult !== undefined){
          this.wheel.reset();
          this.spin(this.todayLastResult.data.single_number).then(r => {});
        }
        }, 2000);
    });


    this.numberCombinationMatrix = this.playGameService.getNumberCombinationMatrix();
    this.copyNumberMatrix  = JSON.parse(JSON.stringify(this.numberCombinationMatrix));

    this.singleNumbers = this.playGameService.getSingleNumbers();
    this.copySingleNumber = JSON.parse(JSON.stringify(this.singleNumbers));



  }

  ngOnInit(): void {

    // let audio = new Audio();
    // audio.src = "sound/Wheel.wav";
    // audio.load();
    // audio.play();

    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#FFA500', '#8B008B', '#FF1493', '#20B2AA', '#8B0000', '#00FF00', '#e0e000', '#0000FF', '#6A5ACD', '#cd5c5c'];
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 10],
      text: `${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '40'
    }));

    this.selectedGame = 1;


    this.gameResultService.getResultByCurrentDate(1);
    this.gameResultService.getResultByCurrentDateListener().subscribe((response: GameResult[])=>{
      this.currentResultList = response;
      // console.log('current',this.currentResultList);
      // console.log('test');
    });

    // this.renderer.setStyle(document.body, 'background-image', ' url("assets/images/background.jpg")');
    // this.user = this.authService.userBehaviorSubject.value;

    this.authService.userBehaviorSubject.subscribe(user => {
      this.user = user;
    });

    // this.numberCombinationMatrix = this.playGameService.getNumberCombinationMatrix();
    // this.numberCombinationMatrix  = JSON.parse(JSON.stringify(this.copyNumberMatrix));
    this.playGameService.getNumberCombinationMatrixListener().subscribe((response: SingleNumber[]) => {
      this.numberCombinationMatrix = response;
      this.copyNumberMatrix  = JSON.parse(JSON.stringify(this.numberCombinationMatrix));
    });
    // this.copyNumberMatrix  = JSON.parse(JSON.stringify(this.numberCombinationMatrix));

    // this.singleNumbers = this.playGameService.getSingleNumbers();
    this.playGameService.getSingleNumberListener().subscribe((response: SingleNumber[]) => {
      this.singleNumbers = response;
      this.copySingleNumber = JSON.parse(JSON.stringify(this.singleNumbers));
    });
    // this.copySingleNumber = JSON.parse(JSON.stringify(this.singleNumbers));

    this.commonService.currentTimeBehaviorSubject.asObservable().subscribe(response => {
      this.alwaysTime = response;
    });

    this.commonService.remainingTimeBehaviorSubject.asObservable().subscribe(response => {
      this.remainingTime = response;
      const x = String(this.remainingTime).split(':');
      // tslint:disable-next-line:radix
      this.value = parseInt(x[0]);
    });

    // variableSettings enabling
    this.projectData = this.commonService.getProjectData();
    this.chips = this.projectData.chips;
    this.commonService.getVariableSettingsListener().subscribe((response: ProjectData) => {
      this.projectData = response;
      this.chips = this.projectData.chips;
    });

    this.activeDrawTime = this.commonService.getActiveDrawTime();
    this.commonService.getActiveDrawTimeListener().subscribe((response: DrawTime) => {
        this.activeDrawTime = response;
    });
    // this.currentDateResult = this.playGameService.getCurrentDateResult();
    // this.playGameService.getCurrentDateResultListener().subscribe((response: CurrentGameResult) => {
    //   this.currentDateResult = response;
    // });

    this.nextDrawId = this.watchDrawService.getNextDraw();

    this.games = this.gameService.getGame()
    this.gameService.getGameListener().subscribe((response: Game[]) => {
      this.games = response;
    });
    // this.games = this.game


  }// end of ngOnIInit

  resultButton(gameId){
    this.gameResultService.getResultByCurrentDate(gameId);
  }
  reset() {
    this.wheel.reset();
  }
  before() {
    console.log('Your wheel is about to spin');
  }

  async spin(prize) {
    this.idToLandOn = prize;
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin();
  }

  after() {
    console.log('You have been bamboozled');
  }



  isActiveTripleContainter(idxSingle: number) {
    // tslint:disable-next-line:triple-equals
    return this.activeTripleContainerValue == idxSingle;
  }

  setActiveTripleContainerValue(i: number) {
    this.activeTripleContainerValue = i;
  }

  setGameInputSet(value, idxSingle: number, gameId: number){
    const numberWiseTotalQuantity = this.selectedChip;
    // tslint:disable-next-line:triple-equals
    let index = -1;
    // tslint:disable-next-line:triple-equals
    if (gameId == 1){
      index = this.userGameInput.findIndex(x => x.singleNumberId === value.singleNumberId);
      // tslint:disable-next-line:triple-equals
    }else if (gameId == 2){
      index = this.userGameInput.findIndex(x => x.numberCombinationId === value.numberCombinationId);
    }


    if (index > -1){
      this.userGameInput[index].quantity += this.selectedChip;
      value.quantity = this.userGameInput[index].quantity;
    }else{

      const tempPlayDetails = {
        gameTypeId: gameId,
        numberCombinationId: value.numberCombinationId,
        singleNumberId: value.singleNumberId,
        quantity: this.selectedChip,
        mrp: 1
      };
      this.userGameInput.push(tempPlayDetails);
      value.quantity = this.selectedChip;
    }

    this.totalTicketPurchased = this.userGameInput.map(a => a.quantity).reduce(function(a, b)
    {
      return a + b;
    });
  }

  changeChip(value){
    this.selectedChip = value;
  }

  resetMatrixValue(){
    // console.log(this.copyNumberMatrix);
    // console.log(this.copySingleNumber);
    this.userGameInput = [];
    this.numberCombinationMatrix = JSON.parse(JSON.stringify(this.copyNumberMatrix));
    // this.numberCombinationMatrix = this.copyNumberMatrix;
    // console.log(this.numberCombinationMatrix);
    this.singleNumbers = JSON.parse(JSON.stringify(this.copySingleNumber));
    // this.singleNumbers = this.copySingleNumber;
    // console.log(this.singleNumbers);
    this.totalTicketPurchased = 0;
  }

  printDiv() {
    this.ngxPrinterService.printOpenWindow = false;
    this.ngxPrinterService.printDiv('print-section');
    this.ngxPrinterService.printOpenWindow = false;
  }


  saveUserPlayInputDetails(){

    if (this.user.balance < this.totalTicketPurchased){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Low Balance',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to buy ticket?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save It!'
    }).then((result) => {
      if (result.isConfirmed){
        const masterData = {
          playMaster: {drawMasterId: this.activeDrawTime.drawId, terminalId: this.user.userId, gameId: this.selectedGame},
          playDetails: this.userGameInput
        };
        this.playGameService.saveUserPlayInputDetails(masterData).subscribe(response => {
          if (response.success === 1){
            this.lastPurchasedTicketDetails = response;
            this.lastPurchasedTicketSingle = this.lastPurchasedTicketDetails.data.game_input.single_game_data;
            this.lastPurchasedTicketTriple = this.lastPurchasedTicketDetails.data.game_input.triple_game_data;
            const responseData = response.data;
            // @ts-ignore
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Ticket purchased',
              showConfirmButton: false,
              timer: 1000
            });
            // updating terminal balance from here
            this.authService.setUserBalanceBy(responseData.play_master.terminal.balance);

            this.resetMatrixValue();

            setTimeout(function() {
              document.getElementById('print-button').click();
            }.bind(this), 3000);

          }else{
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
  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = "../../../assets/audio/alarm.wav";
  //   audio.load();
  //   audio.play();
  // }
  // playAudio();

  setActiveGame(gameData) {
    this.selectedGame = gameData.id;
    this.commonService.gameDrawTime(this.selectedGame);
    // this.bgColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    this.bgColor = this.gameBackgroundColorArr[gameData.id - 1];
  }


}
