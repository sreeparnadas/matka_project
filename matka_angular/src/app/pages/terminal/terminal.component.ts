import { Component, OnInit } from '@angular/core';
import {PlayGameService} from '../../services/play-game.service';
import {SingleNumber} from '../../models/SingleNumber.model';
import {CommonService} from '../../services/common.service';
import {ProjectData} from '../../models/project-data.model';
import {NumberCombinations} from '../../models/NumberCombinations.model';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  projectData: ProjectData;
  showDeveloperDiv = true;

  singleNumbers: SingleNumber[] = [];
  numberCombinations: NumberCombinations[] = [];
  columnNumber = 5;
  constructor(private playGameService: PlayGameService, private commonService: CommonService) { }

  ngOnInit(): void {

    this.singleNumbers = this.playGameService.getSingleNumbers();
    this.playGameService.getSingleNumberListener().subscribe((response: SingleNumber[]) => {
      this.singleNumbers = response;
    });

    this.numberCombinations = this.playGameService.getAllTripleNumbers();
    this.playGameService.getAllTripleNumberListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinations = response;
    });

    // variableSettings enabling
    this.projectData = this.commonService.getProjectData();
    this.commonService.getVariableSettingsListener().subscribe((response: ProjectData) => {
      this.projectData = response;
    });
  }// end of ngOnIInit

}
