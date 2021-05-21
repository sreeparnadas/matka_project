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
  constructor(private manualResultService: ManualResultService, private playGameService: PlayGameService) {
    this.manualResultForm = new FormGroup({
      id: new FormControl(null),
      drawMasterId: new FormControl(null, [Validators.required]),
      numberCombinationId: new FormControl(null, [Validators.required]),
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


  setManualResultInForm(numberCombination){
    this.manualResultForm.patchValue({numberCombinationId: numberCombination.numberCombinationId});
  }

}
