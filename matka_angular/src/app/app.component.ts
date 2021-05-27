import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import {AuthService} from './services/auth.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import {CanonicalService} from './services/canonical.service';
import {CommonService} from './services/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'kfatafat';
  active = 1;
  events: string[] = [];
  opened: boolean;
  faCoffee = faCoffee;
  faBaby = faBaby;
  mediaSub: Subscription;
  deviceXs: boolean;

  direction = 'row';

  toggleDirection() {
    const next = (DIRECTIONS.indexOf(this.direction) + 1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }

  // tslint:disable-next-line:max-line-length
  constructor(public mediaObserver: MediaObserver, private authService: AuthService
              // tslint:disable-next-line:align
              , private pageTitle: Title, private metaService: Meta
              // tslint:disable-next-line:align
              , private canonicalService: CanonicalService
              // tslint:disable-next-line:align
              , private commonService: CommonService){

  }
  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.pageTitle.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Kfatafat online games' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'kfatafat kolkata' },
      { name: 'date', content: '2021-05-25', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { description: 'kfatafat⭐ORIGNAL WEBSITE ⭐ Today All Bazi Tips KOLKATA Fatafat Result Live Update. Kolkata Fatafat Result . कोलकाता फटाफट RESULT, Prediction the result and win, try your luck..\n' +
          '‎Kolkata Fatafat · ‎OLD Kolkata  kFatafat Result · ‎Kolkata fun lucky number · ‎Kolkata FF FUN result since 1960' }
    ]);


    this.mediaSub = this.mediaObserver.media$.subscribe(
        (result: MediaChange) => {
          this.deviceXs = (result.mqAlias === 'xs' ? true : false);
          this.commonService.setDeviceXs(this.deviceXs);
        }
      );

    this.authService.autoLogin();
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
