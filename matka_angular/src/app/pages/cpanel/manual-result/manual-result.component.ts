import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DrawTime} from '../../../models/DrawTime.model';
import {ManualResultService} from '../../../services/manual-result.service';
import {SingleNumber} from '../../../models/SingleNumber.model';

@Component({
  selector: 'app-manual-result',
  templateUrl: './manual-result.component.html',
  styleUrls: ['./manual-result.component.scss']
})
export class ManualResultComponent implements OnInit {

  manualResultForm: FormGroup;
  drawTimes: DrawTime[] = [];
  constructor(private manualResultService: ManualResultService) {
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
        console.log(this.drawTimes);
      });
  }

}
