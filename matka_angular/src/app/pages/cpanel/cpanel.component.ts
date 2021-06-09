import { Component, OnInit } from '@angular/core';
import {NgxPrinterService, PrintItem} from 'ngx-printer';
import { ViewChild, TemplateRef, ElementRef } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ngxPrintMarkerPosition } from 'ngx-printer';
import {ReceiptComponent} from './receipt/receipt.component';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.scss']
})
export class CpanelComponent implements OnInit {
  @ViewChild('PrintTemplate')
  private PrintTemplateTpl: TemplateRef<any>;

  @ViewChild(ReceiptComponent, { read: ElementRef })
  PrintComponent: ElementRef;

  printWindowSubscription: Subscription;
  $printItems: Observable<PrintItem[]>;
  user: User;



  constructor(private ngxPrinterService: NgxPrinterService, private authService: AuthService) {
    this.printWindowSubscription = this.ngxPrinterService.$printWindowOpen.subscribe(
      val => {
        console.log('Print window is open:', val);
      }
    );
    this.$printItems = this.ngxPrinterService.$printItems;
  }

  ngOnInit(): void {
    this.user = this.authService.userBehaviorSubject.value;
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

  printHTMLElementToCurrentWithCustomCSS() {
    this.ngxPrinterService.printOpenWindow = false;
    this.ngxPrinterService.renderClass = 'current-window';
    this.ngxPrinterService.printHTMLElement(this.PrintComponent.nativeElement);
    this.ngxPrinterService.printOpenWindow = true;
    this.ngxPrinterService.renderClass = 'default';
  }

  printerMarkerClicked() {
    alert('Print marker clicked');
  }
}
