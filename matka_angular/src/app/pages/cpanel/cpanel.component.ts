import { Component, OnInit } from '@angular/core';
import {NgxPrinterService} from 'ngx-printer';
import { ViewChild, TemplateRef, ElementRef } from '@angular/core';
import {LttleDummyComponent} from './lttle-dummy/lttle-dummy.component';
import {Subscription} from 'rxjs';
import {ngxPrintMarkerPosition } from 'ngx-printer';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.scss']
})
export class CpanelComponent implements OnInit {
  @ViewChild('PrintTemplate')
  private PrintTemplateTpl: TemplateRef<any>;
  @ViewChild(LttleDummyComponent, { read: ElementRef })
  PrintComponent: ElementRef;

  printWindowSubscription: Subscription;



  constructor(private ngxPrinterService: NgxPrinterService) {
    this.printWindowSubscription = this.ngxPrinterService.$printWindowOpen.subscribe(
      val => {
        console.log('Print window is open:', val);
      }
    );
  }

  ngOnInit(): void {
  }
  printDiv() {
    this.ngxPrinterService.printOpenWindow = false;
    this.ngxPrinterService.printDiv('printDiv');
    this.ngxPrinterService.printOpenWindow = false;
  }

  printTemplate() {
    // console.log(this.PrintTemplateTpl);
    this.ngxPrinterService.printAngular(this.PrintTemplateTpl);
  }

}
