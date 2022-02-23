import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import {ModalDirective} from 'angular-bootstrap-md';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user.model';
import {MasterSuperStockiestService} from '../../../services/master-super-stockiest.service';
import {CPanelBarcodeReport} from "../../../models/CPanelBarcodeReport.model";
import {BarcodeDetails} from "../../../models/BarcodeDetails.model";
import {AdminReportService} from "../../../services/admin-report.service";
import {CPanelCustomerSaleReport} from "../../../models/CPanelCustomerSaleReport.model";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-super-stockist-report',
  templateUrl: './super-stockist-report.component.html',
  styleUrls: ['./super-stockist-report.component.scss']
})
export class SuperStockistReportComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  thisYear = new Date().getFullYear();
  thisMonth = new Date().getMonth();
  thisDay = new Date().getDate();
  startDate = new Date(this.thisYear, this.thisMonth, this.thisDay);

  StartDateFilter = this.startDate;
  EndDateFilter = this.startDate;
  pipe = new DatePipe('en-US');

  barcodeReportRecords: CPanelBarcodeReport[] = [];
  barcodeDetails: BarcodeDetails;
  customerSaleReportRecords: CPanelCustomerSaleReport[] = [];

  totalAmount: number = 0;
  user: User;

  constructor(private authService: AuthService, private masterSuperStockistService: MasterSuperStockiestService, private adminReportService: AdminReportService) { }

  ngOnInit(): void {
    this.user = this.authService.userBehaviorSubject.value;

    this.masterSuperStockistService.barcodeReportBySuperStockistId('2022-02-17', '2022-02-17', this.user.userId).subscribe((response) => {
      this.barcodeReportRecords = response.data;
    });

    this.masterSuperStockistService.customerSaleReportByDate('2022-02-17', '2022-02-17', this.user.userId).subscribe((response) => {
      this.customerSaleReportRecords = response.data;
      let temp= 0;
      this.customerSaleReportRecords.forEach(function (value) {
        temp += Number(value.total);
      });
      this.totalAmount = temp;
    });

    // this.searchByDateTab1();
    // this.searchByDateTab2();

  }
  // searchByDateTab1(){
  //   Swal.fire({
  //     title: 'Please Wait !',
  //     html: 'loading ...', // add html attribute if you want or remove
  //     allowOutsideClick: false,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     }
  //   });
  //   let startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
  //   let endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');
  //   this.adminReportService.customerSaleReportByDate(startDate, endDate).subscribe((response) => {
  //     if (response.data){
  //       Swal.close();
  //     }
  //   });
  // }

  openPopup(playMasterId: number, barcodeNumber: string){
    this.adminReportService.getBarcodeDetails(playMasterId).subscribe(response => {
      this.barcodeDetails = response.data;
    });
  }

}
