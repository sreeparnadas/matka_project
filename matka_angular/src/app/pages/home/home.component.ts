import {Component, OnInit, Renderer2} from '@angular/core';
import {GameResultService} from '../../services/game-result.service';
import {GameResult} from '../../models/GameResult.model';
import {Meta} from '@angular/platform-browser';
import {formatDate} from '@angular/common';
import {CommonService} from '../../services/common.service';
import {environment} from '../../../environments/environment';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {WatchDrawService} from '../../services/watch-draw.service';
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
  columnNumber = 10;

  nextDrawId: any;

  constructor(private gameResultService: GameResultService, private metaTagService: Meta,
              private commonService: CommonService, private renderer: Renderer2, private watchDrawService: WatchDrawService) {

    this.currentDate = this.commonService.getCurrentDate();
    this.deviceXs = this.commonService.deviceXs;
  }

  ngOnInit(){
    this.renderer.setStyle(document.body, 'background-image', 'none');
    this.resultList = this.gameResultService.getResultList();
    this.gameResultService.getResultListListener().subscribe((response: GameResult[]) => {
      this.resultList = response;
    });
  }

  public openPDF(): void {
    // const DATA = document.getElementById('table-div');
    const DATA = document.getElementById('title-4-div');
    console.log(DATA);
    html2canvas(DATA).then(canvas => {

      const fileWidth = 208;
      const fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('angular-demo.pdf');
    });
  }

}
