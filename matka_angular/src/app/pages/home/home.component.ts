import { Component, OnInit } from '@angular/core';
import {GameResultService} from '../../services/game-result.service';
import {GameResult} from '../../models/GameResult.model';
import {Meta} from '@angular/platform-browser';
import {formatDate} from "@angular/common";

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
  constructor(private gameResultService: GameResultService, private metaTagService: Meta) {
    const now = new Date();
    this.currentDate = formatDate(now, 'dd-MM-yyyy', 'en');
  }

  ngOnInit(){
    this.resultList = this.gameResultService.getResultList();
    this.gameResultService.getResultListListener().subscribe((response: GameResult[]) => {
      this.resultList = response;
    });

  }

}
