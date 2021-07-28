import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import {AdminReportService} from '../../../services/admin-report.service';
import {environment} from '../../../../environments/environment';
import {CPanelBarcodeReport} from '../../../models/CPanelBarcodeReport.model';
import {Sort} from '@angular/material/sort';
import Swal from 'sweetalert2';
import {BarcodeDetails} from '../../../models/BarcodeDetails.model';
import {CPanelCustomerSaleReport} from '../../../models/CPanelCustomerSaleReport.model';
import {FormGroup} from "@angular/forms";
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.scss']
})
export class AdminReportsComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;


  startDate = new Date(2021, 0, 1);

  isProduction = environment.production;
  showDevArea = false;
  barcodeReportRecords: CPanelBarcodeReport[] = [];
  barcodeDetails: BarcodeDetails;
  customerSaleReportRecords: CPanelCustomerSaleReport[] = [];

  StartDateFilter: any;
  EndDateFilter: any;
  pipe = new DatePipe('en-US');

  // picker1: any;
  constructor(private adminReportService: AdminReportService) {

  }

  ngOnInit(): void {
    this.barcodeReportRecords = this.adminReportService.getBarcodeReportRecords();
    this.adminReportService.getBarcodeReportListener().subscribe((response: CPanelBarcodeReport[]) => {
      this.barcodeReportRecords = response;
    });

    this.customerSaleReportRecords = this.adminReportService.getCustomerSaleReportRecords();
    this.adminReportService.getCustomerSaleReportListener().subscribe((response: CPanelCustomerSaleReport[]) => {
      this.customerSaleReportRecords = response;
      console.log('customerSaleReportRecords = ', this.customerSaleReportRecords);
    });
  }

  searchByDate(){
    var startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
    var endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');

    this.adminReportService.customerSaleReportByDate(startDate,endDate).subscribe();
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

    this.adminReportService.getBarcodeDetails(playMasterId).subscribe(response => {
      this.barcodeDetails = response.data;
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
