import { Component, OnInit } from '@angular/core';
import { CurrentGameResult } from 'src/app/models/CurrentGameResult.model';
import { ResultService } from 'src/app/services/result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  currentDateResult: CurrentGameResult;

  currentDate: string;
  columnNumber = 5;
  columnNumber2 = 7;
  columnNumber3 = 1;
  public activeTripleContainerValue = 0;

  constructor(private resultService: ResultService) {

   }

  ngOnInit(): void {
    this.currentDateResult = this.resultService.getCurrentDateResult();
    this.resultService.getCurrentDateResultListener().subscribe((response: CurrentGameResult) => {
      this.currentDateResult = response;
      // console.log(this.currentDateResult);
    });
  }
  isActiveTripleContainter(idxSingle: number) {
    // tslint:disable-next-line:triple-equals
    return this.activeTripleContainerValue == idxSingle;
  }

  

}
