import {Component, OnInit, Renderer2} from '@angular/core';
import {TerminalReportService} from "../../services/terminal-report.service";
import {User} from "../../models/user.model";
import {CPanelBarcodeReport} from "../../models/CPanelBarcodeReport.model";
import {TerminalBarcodeReport} from "../../models/TerminalBarcodeReport.model";
import {DatePipe} from "@angular/common";
import {TerminalSaleReport} from "../../models/TerminaSaleReport.model";
import Swal from 'sweetalert2';
import {AdminReportService} from "../../services/admin-report.service";
import {BarcodeDetails} from "../../models/BarcodeDetails.model";
import {AuthService} from "../../services/auth.service";
import {CommonService} from "../../services/common.service";


@Component({
  selector: 'app-terminal-report',
  templateUrl: './terminal-report.component.html',
  styleUrls: ['./terminal-report.component.scss']
})
export class TerminalReportComponent implements OnInit {

  thisYear = new Date().getFullYear();
  thisMonth = new Date().getMonth();
  thisDay = new Date().getDate();
  startDate = new Date(this.thisYear, this.thisMonth, this.thisDay);
  StartDateFilter = this.startDate;
  EndDateFilter = this.startDate;
  barcodeDetails: BarcodeDetails;
  pipe = new DatePipe('en-US');

  terminalReportData: TerminalBarcodeReport[] = [];
  terminalSaleReportData: TerminalSaleReport[] = [];

  constructor( private renderer: Renderer2, private terminalReportService: TerminalReportService, private adminReportService:AdminReportService) {
    this.renderer.setStyle(document.body, 'background-image', 'none');

    this.terminalReportService.terminalListListener().subscribe((response)=>{
      this.terminalReportData = response;
    })
    this.terminalReportService.terminalSaleListListener().subscribe((response)=>{
      this.terminalSaleReportData = response;
    })
    this.getTerminalBarcodeReport();
    this.getTerminalSaleReport();
  }

  ngOnInit(): void {
    // this.terminalReport.getTerminalReport();
  }

  claimPrize(play_master_id){
    Swal.fire({
      title: 'Please Wait !',
      html: 'adding points ...',// add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    this.terminalReportService.claimPrize(play_master_id).subscribe((response)=>{
      if(response.point){
        Swal.close();
      }
    });
  }

  checkBtnEligibility(record){
    if(record.is_cancelled == 1){
      return true;
    }
    if(record.is_cancelable == 0){
      return true;
    }
    return false;
  }

  cancelTicket(masterId){
    Swal.fire({
      title: 'Confirm Cancel ?',
      // showDenyButton: true,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: `Yes, confirm`,
      // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Please Wait !',
          html: 'Confirming cancel',// add html attribute if you want or remove
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });
        this.terminalReportService.cancelTicket(masterId).subscribe((response)=>{
          if(response.data){
            Swal.hideLoading();
            Swal.fire({
              icon: 'success',
              title: 'Cancelled',
              showConfirmButton: false,
              timer: 1500
            })
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Some error occurred',
              showConfirmButton: false,
              timer: 2000
            })
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  getTerminalBarcodeReport(){
    Swal.fire({
      title: 'Please Wait !',
      html: 'loading ...',// add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    const User = JSON.parse(localStorage.getItem('user'));
    var startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
    var endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');
    this.terminalReportService.getTerminalReport(User.userId,startDate,endDate).subscribe((response)=>{
      if(response.data){
        Swal.close();
      }
    });
  }

  getTerminalSaleReport(){
    Swal.fire({
      title: 'Please Wait !',
      html: 'loading ...',// add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    const User = JSON.parse(localStorage.getItem('user'));
    var startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
    var endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');
    this.terminalReportService.getTerminalSaleReport(User.userId,startDate,endDate).subscribe((response)=>{
      if(response.data){
        Swal.close();
      }
    });
  }

  openPopup(playMasterId: number, barcodeNumber: string){

    this.adminReportService.getBarcodeDetails(playMasterId).subscribe(response => {
      this.barcodeDetails = response.data;
    });
  }

}
