import {Component, OnInit, ViewChild} from '@angular/core';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {CPanelBarcodeReport} from "../../../models/CPanelBarcodeReport.model";
import {BarcodeDetails} from "../../../models/BarcodeDetails.model";
import {CPanelCustomerSaleReport} from "../../../models/CPanelCustomerSaleReport.model";
import {DatePipe} from "@angular/common";
import {ModalDirective} from "angular-bootstrap-md";
import {StockistReportService} from "../../../services/stockist-report.service";
import {User} from "../../../models/user.model";
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-stockiest-report',
  templateUrl: './stockiest-report.component.html',
  styleUrls: ['./stockiest-report.component.scss']
})
export class StockiestReportComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  thisYear = new Date().getFullYear();
  thisMonth = new Date().getMonth();
  thisDay = new Date().getDate();
  startDate = new Date(this.thisYear, this.thisMonth, this.thisDay);

  isProduction = environment.production;
  showDevArea = false;
  barcodeReportRecords: CPanelBarcodeReport[] = [];
  barcodeDetails: BarcodeDetails;
  customerSaleReportRecords: CPanelCustomerSaleReport[] = [];

  StartDateFilter = this.startDate;
  EndDateFilter = this.startDate;
  pipe = new DatePipe('en-US');

  totalAmount = 0;
  columnNumber = 4;
  selectedReport = '0';
  userData: User;

  // picker1: any;
  constructor(private stockistReportService: StockistReportService) {
    // console.log(this.thisDay);
    this.userData = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    this.barcodeReportRecords = this.stockistReportService.getBarcodeReportRecords();
    this.stockistReportService.getBarcodeReportListener().subscribe((response: CPanelBarcodeReport[]) => {
      this.barcodeReportRecords = response;
    });

    this.customerSaleReportRecords = this.stockistReportService.getCustomerSaleReportRecords();
    this.stockistReportService.getCustomerSaleReportListener().subscribe((response: CPanelCustomerSaleReport[]) => {
      this.customerSaleReportRecords = response;
      let temp = 0;
      this.customerSaleReportRecords.forEach(function(value) {
        temp += Number(value.total);
      });
      // console.log('total amount' + temp);
      this.totalAmount = temp;
    });

    this.searchByDateTab1();
    this.searchByDateTab2();
  }

  searchByDateTab1(){
    Swal.fire({
      title: 'Please Wait !',
      html: 'loading ...', // add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    let startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
    let endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');
    this.stockistReportService.customerSaleReportByDate(startDate, endDate, this.userData.userId).subscribe((response) => {
      if (response.data){
        Swal.close();
      }
    });
  }

  searchByDateTab2(){
    Swal.fire({
      title: 'Please Wait !',
      html: 'loading ...', // add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    let startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
    let endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');
    this.stockistReportService.barcodeReportByDate(startDate, endDate, this.userData.userId).subscribe((response) => {
      if (response.data){
        Swal.close();
      }
    });
  }

  sortData(sort: Sort) {
    const data = this.barcodeReportRecords.slice();
    if (!sort.active || sort.direction === '') {
      this.barcodeReportRecords = data;
      return;
    }
    this.barcodeReportRecords = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const isDesc = sort.direction === 'desc';
      switch (sort.active) {
        case 'barcode_number': return compare(a.barcode_number, b.barcode_number, isAsc);
        case 'draw_time': return compare(a.draw_time, b.draw_time, isAsc);
        case 'terminal_pin': return compare(a.terminal_pin, b.terminal_pin, isAsc);
        case 'ticket_taken_time': return compare(a.ticket_taken_time, b.ticket_taken_time, isAsc);
        case 'total_quantity': return compare(a.total_quantity, b.total_quantity, isAsc);
        case 'amount': return compare(a.amount, b.amount, isAsc);
        default: return 0;
      }
    });
  }

  openPopup(playMasterId: number, barcodeNumber: string){

    this.stockistReportService.getBarcodeDetails(playMasterId).subscribe(response => {
      this.barcodeDetails = response.data;
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
