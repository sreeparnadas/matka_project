import { Component, OnInit } from '@angular/core';
import {PlayGameService} from '../../services/play-game.service';
import {SingleNumber} from '../../models/SingleNumber.model';
import {CommonService, VariableSettings} from '../../services/common.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  variableSettings: VariableSettings;
  showDeveloperDiv = true;
  switchcolorMode = false;
  singleNumbers: SingleNumber[] = [];
  constructor(private playGameService: PlayGameService, private commonService: CommonService) { }

  ngOnInit(): void {

    this.singleNumbers = this.playGameService.getSingleNumbers();
    this.playGameService.getSingleNumberListener().subscribe((response: SingleNumber[]) => {
      this.singleNumbers = response;
    });
    // variableSettings enabling
    this.variableSettings = this.commonService.getVariableSettings();
    this.commonService.getVariableSettingsListener().subscribe((response: VariableSettings) => {
      this.variableSettings = response;
    });
  }// end of ngOnIInit



}
