import { Component, OnInit } from '@angular/core';
import {PlayGameService} from '../../services/play-game.service';
import {SingleNumber} from '../../models/SingleNumber.model';
import {CommonService} from '../../services/common.service';
import {ProjectData} from '../../models/project-data.model';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  projectData: ProjectData;
  showDeveloperDiv = true;

  singleNumbers: SingleNumber[] = [];
  numberCombinationMatrix: SingleNumber[] = [];

  columnNumber = 5;
  private activeTripleContainerValue = 0;
  constructor(private playGameService: PlayGameService, private commonService: CommonService) { }

  ngOnInit(): void {

    this.numberCombinationMatrix = this.playGameService.getNumberCombinationMatrix();
    this.playGameService.getNumberCombinationMatrixListener().subscribe((response: SingleNumber[]) => {
      this.numberCombinationMatrix = response;
      console.log('testing', this.numberCombinationMatrix[0].numberCombinations);
    });

    this.singleNumbers = this.playGameService.getSingleNumbers();
    this.playGameService.getSingleNumberListener().subscribe((response: SingleNumber[]) => {
      this.singleNumbers = response;
    });


    // variableSettings enabling
    this.projectData = this.commonService.getProjectData();
    this.commonService.getVariableSettingsListener().subscribe((response: ProjectData) => {
      this.projectData = response;
    });
  }// end of ngOnIInit

  isActiveTripleContainter(idxSingle: number) {
    // tslint:disable-next-line:triple-equals
    return this.activeTripleContainerValue == idxSingle;
  }

  setActiveTripleContainerValue(i: number) {
    this.activeTripleContainerValue = i;
  }
}
