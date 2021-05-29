import { Component, OnInit } from '@angular/core';
import {GameResultService} from '../../services/game-result.service';
import {GameResult} from '../../models/GameResult.model';
import {Meta} from '@angular/platform-browser';
import {formatDate} from '@angular/common';
import {CommonService} from '../../services/common.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  // images = [1, 2, 3, 4, 5, 6].map((n) => `assets/carousel/carousel_${n}.jpg`);

  resultList: GameResult[] = [];
  // tslint:disable-next-line:no-shadowed-variable
  currentDate: string;
  deviceXs: boolean;
  showDevArea = false;
  isProduction = environment.production;
  constructor(private gameResultService: GameResultService, private metaTagService: Meta, private commonService: CommonService) {
    this.currentDate = this.commonService.getCurrentDate();
    this.deviceXs = this.commonService.deviceXs;
  }

  ngOnInit(){
    this.resultList = this.gameResultService.getResultList();
    this.gameResultService.getResultListListener().subscribe((response: GameResult[]) => {
      this.resultList = response;
    });

  }

}
