import { Component, OnInit } from '@angular/core';
import {PlayGameService} from '../../services/play-game.service';
import {SingleNumber} from '../../models/SingleNumber.model';
import {CommonService} from '../../services/common.service';
import {ProjectData} from '../../models/project-data.model';
import {UserGameInput} from '../../models/userGameInput.model';
import * as cloneDeep from 'lodash/cloneDeep';

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
  chips: number[] = [];
  userGameInput: any[] = [];

  columnNumber = 5;
  public activeTripleContainerValue = 0;
  public selectedChip = 2;
  copyNumberMatrix: SingleNumber[];
  constructor(private playGameService: PlayGameService, private commonService: CommonService) { }

  ngOnInit(): void {

    this.numberCombinationMatrix = this.playGameService.getNumberCombinationMatrix();
    // this.numberCombinationMatrix  = JSON.parse(JSON.stringify(this.copyNumberMatrix));
    this.playGameService.getNumberCombinationMatrixListener().subscribe((response: SingleNumber[]) => {
      this.numberCombinationMatrix = response;
      this.copyNumberMatrix  = JSON.parse(JSON.stringify(this.numberCombinationMatrix));
    });

    this.singleNumbers = this.playGameService.getSingleNumbers();
    this.playGameService.getSingleNumberListener().subscribe((response: SingleNumber[]) => {
      this.singleNumbers = response;
    });


    // variableSettings enabling
    this.projectData = this.commonService.getProjectData();
    this.chips = this.projectData.chips;
    this.commonService.getVariableSettingsListener().subscribe((response: ProjectData) => {
      this.projectData = response;
      this.chips = this.projectData.chips;
    });
  }// end of ngOnIInit

  isActiveTripleContainter(idxSingle: number) {
    // tslint:disable-next-line:triple-equals
    return this.activeTripleContainerValue == idxSingle;
  }

  setActiveTripleContainerValue(i: number) {
    this.activeTripleContainerValue = i;
  }

  setGameInputSet(value, idxSingle: number){
    const numberWiseTotalQuantity = this.selectedChip;
    const index = this.userGameInput.findIndex(x => x.numberCombinationId === value.numberCombinationId);
    // const numberIndex = this.numberCombinations.findIndex(x => x.numberCombinationId === this.activeTripleContainerValue);
    console.log(index);
    if (index > -1){
      this.userGameInput[index].quantity += this.selectedChip;
      value.quantity = this.userGameInput[index].quantity;
    }else{

      const tempPlayDetails = {
        gameTypeId: 2,
        numberCombinationId: value.numberCombinationId,
        quantity: this.selectedChip,
        mrp: 1
      };
      this.userGameInput.push(tempPlayDetails);
      value.quantity = this.selectedChip;
    }
  }

  changeChip(value){
    this.selectedChip = value;
  }

  resetMatrixValue(){
    this.userGameInput = [];
    this.numberCombinationMatrix = JSON.parse(JSON.stringify(this.copyNumberMatrix));
  }
}
