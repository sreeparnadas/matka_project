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
  numberCombinationsForOne: NumberCombinations[] = [];
  numberCombinationsForTwo: NumberCombinations[] = [];
  numberCombinationsForThree: NumberCombinations[] = [];
  numberCombinationsForFour: NumberCombinations[] = [];
  numberCombinationsForFive: NumberCombinations[] = [];
  numberCombinationsForSix: NumberCombinations[] = [];
  numberCombinationsForSeven: NumberCombinations[] = [];
  numberCombinationsForEight: NumberCombinations[] = [];
  numberCombinationsForNine: NumberCombinations[] = [];

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
      console.log(this.numberCombinations);
    });

    // single 1 => triple(22)
    this.numberCombinationsForOne = this.playGameService.getNumberCombinationsForOne();
    this.playGameService.getNumberCombinationsForOneListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForOne = response;
    });

    // single 2 => triple(22)
    this.numberCombinationsForTwo = this.playGameService.getNumberCombinationsForTwo();
    this.playGameService.getNumberCombinationsForTwoListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForTwo = response;
    });

    // single 3 => triple(22)
    this.numberCombinationsForThree = this.playGameService.getNumberCombinationsForThree();
    this.playGameService.getNumberCombinationsForThreeListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForThree = response;
    });

    // single 4 => triple(22)
    this.numberCombinationsForFour = this.playGameService.getNumberCombinationsForFour();
    this.playGameService.getNumberCombinationsForFourListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForFour = response;
    });

    // single 5 => triple(22)
    this.numberCombinationsForFive = this.playGameService.getNumberCombinationsForFive();
    this.playGameService.getNumberCombinationsForFiveListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForFive = response;
    });

    // single 6 => triple(22)
    this.numberCombinationsForSix = this.playGameService.getNumberCombinationsForSix();
    this.playGameService.getNumberCombinationsForSixListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForSix = response;
    });

    // single 7 => triple(22)
    this.numberCombinationsForSeven = this.playGameService.getNumberCombinationsForSeven();
    this.playGameService.getNumberCombinationsForSevenListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForSeven = response;
    });

    // single 8 => triple(22)
    this.numberCombinationsForEight = this.playGameService.getNumberCombinationsForEight();
    this.playGameService.getNumberCombinationsForEightListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForEight = response;
    });

    // single 9 => triple(22)
    this.numberCombinationsForNine = this.playGameService.getNumberCombinationsForNine();
    this.playGameService.getNumberCombinationsForNineListener().subscribe((response: NumberCombinations[]) => {
      this.numberCombinationsForNine = response;
    });

    // variableSettings enabling
    this.projectData = this.commonService.getProjectData();
    this.commonService.getVariableSettingsListener().subscribe((response: ProjectData) => {
      this.projectData = response;
    });
  }// end of ngOnIInit

}
