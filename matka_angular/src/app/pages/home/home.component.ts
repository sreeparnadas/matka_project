import { Component, OnInit } from '@angular/core';
import {GameResultService} from '../../services/game-result.service';
import {GameResult} from '../../models/GameResult.model';

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
  images = [1, 2, 3, 4, 5, 6].map((n) => `assets/carousel/carousel_${n}.jpg`);

  resultList: GameResult[] = [];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private GameResultService: GameResultService) {

  }

  ngOnInit(){
    this.resultList = this.GameResultService.getResultList();
    this.GameResultService.getResultListListener().subscribe((response: GameResult[]) => {
      this.resultList = response;
    });

  }

}
