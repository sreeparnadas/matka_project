import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DrawTime} from '../../../models/DrawTime.model';
import {ManualResultService} from '../../../services/manual-result.service';
import {SingleNumber} from '../../../models/SingleNumber.model';
import {PlayGameService} from '../../../services/play-game.service';

@Component({
  selector: 'app-manual-result',
  templateUrl: './manual-result.component.html',
  styleUrls: ['./manual-result.component.scss']
})
export class ManualResultComponent implements OnInit {

  manualResultForm: FormGroup;
  drawTimes: DrawTime[] = [];
  public numberCombinationMatrix: SingleNumber[] = [];
  private copyNumberMatrix: SingleNumber[];
  currentCombinationMatrixSelectedId: number;
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
}
