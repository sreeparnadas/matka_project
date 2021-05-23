import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DrawTime} from '../../../models/DrawTime.model';
import {ManualResultService} from '../../../services/manual-result.service';
import {SingleNumber} from '../../../models/SingleNumber.model';
import {PlayGameService} from '../../../services/play-game.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import Swal from 'sweetalert2';
import {environment} from '../../../../environments/environment';

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

  manualResultForm: FormGroup;
  drawTimes: DrawTime[] = [];
  public numberCombinationMatrix: SingleNumber[] = [];
  private copyNumberMatrix: SingleNumber[];
  currentCombinationMatrixSelectedId: number;
  currentState = 'initial';
  private validatorError: any;
  isProduction = environment.production;
  showDevArea = false;
  constructor(private manualResultService: ManualResultService, private playGameService: PlayGameService) {
    this.manualResultForm = new FormGroup({
      id: new FormControl(null),
      drawMasterId: new FormControl(null, [Validators.required]),
      numberCombinationId: new FormControl(null, [Validators.required]),
      single: new FormControl(null),
      triple: new FormControl(null),
    });
  }



  ngOnInit(): void {
      this.drawTimes = this.manualResultService.getAllDrawTimes();
      this.manualResultService.getAllDrawTimesListener().subscribe((response: DrawTime[]) => {
        this.drawTimes = response;
      });

      this.numberCombinationMatrix = this.playGameService.getNumberCombinationMatrix();
        // this.numberCombinationMatrix  = JSON.parse(JSON.stringify(this.copyNumberMatrix));
      this.playGameService.getNumberCombinationMatrixListener().subscribe((response: SingleNumber[]) => {
        this.numberCombinationMatrix = response;
        this.copyNumberMatrix  = JSON.parse(JSON.stringify(this.numberCombinationMatrix));
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
}
