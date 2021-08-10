import {Component, OnInit, Renderer2} from '@angular/core';
import {TerminalReportService} from "../../services/terminal-report.service";
import {User} from "../../models/user.model";
import {CPanelBarcodeReport} from "../../models/CPanelBarcodeReport.model";
import {TerminalBarcodeReport} from "../../models/TerminalBarcodeReport.model";
import {DatePipe} from "@angular/common";
import {TerminalSaleReport} from "../../models/TerminaSaleReport.model";

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
  pipe = new DatePipe('en-US');

  terminalReportData: TerminalBarcodeReport[];
  terminalSaleReportData: TerminalSaleReport[];

  constructor( private renderer: Renderer2, private terminalReportService: TerminalReportService) {
    this.renderer.setStyle(document.body, 'background-image', 'none');
    this.terminalReportService.terminalListListener().subscribe((response)=>{
      this.terminalReportData = response;
      console.log(this.terminalReportData);
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
    this.terminalReportService.cancelTicket(masterId).subscribe();
  }

  getTerminalBarcodeReport(){
    const User = JSON.parse(localStorage.getItem('user'));
    var startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
    var endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');
    this.terminalReportService.getTerminalReport(User.userId,startDate,endDate).subscribe();
  }

  getTerminalSaleReport(){
    const User = JSON.parse(localStorage.getItem('user'));
    var startDate = this.pipe.transform(this.StartDateFilter, 'yyyy-MM-dd');
    var endDate = this.pipe.transform(this.EndDateFilter, 'yyyy-MM-dd');
    this.terminalReportService.getTerminalSaleReport(User.userId,startDate,endDate).subscribe();
  }

}
