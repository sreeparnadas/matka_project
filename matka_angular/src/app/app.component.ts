import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import {AuthService} from './services/auth.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import {CanonicalService} from './services/canonical.service';
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
    const next = (DIRECTIONS.indexOf(this.direction) +1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }

  // tslint:disable-next-line:max-line-length
  constructor(public mediaObserver: MediaObserver, private authService: AuthService, private pageTitle: Title, private metaService: Meta, private canonicalService: CanonicalService){
  }
  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.pageTitle.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Kfatafat online games' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'coder hui' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-05-25', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);


    this.mediaSub = this.mediaObserver.media$.subscribe(
        (result: MediaChange) => {
          console.log(result.mqAlias);
          this.deviceXs = (result.mqAlias === 'xs' ? true : false);
        }
      );

      this.authService.autoLogin();
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
