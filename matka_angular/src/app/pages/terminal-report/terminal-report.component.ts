import {Component, OnInit, Renderer2} from '@angular/core';
import {TerminalReportService} from "../../services/terminal-report.service";
import {User} from "../../models/user.model";
import {CPanelBarcodeReport} from "../../models/CPanelBarcodeReport.model";
import {TerminalBarcodeReport} from "../../models/TerminalBarcodeReport.model";
import {DatePipe} from "@angular/common";

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

  constructor( private renderer: Renderer2, private terminalReportService: TerminalReportService) {
    this.renderer.setStyle(document.body, 'background-image', 'none');
    this.terminalReportService.terminalListListener().subscribe((response)=>{
      this.terminalReportData = response;
    })
    this.getTerminalBarcodeReport();
    this.getTerminalSaleReport();
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

  ngOnInit(): void {
    // this.terminalReport.getTerminalReport();
  }

}
