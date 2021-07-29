import {Component, OnInit, Renderer2} from '@angular/core';
import {TerminalReportService} from "../../services/terminal-report.service";
import {User} from "../../models/user.model";
import {CPanelBarcodeReport} from "../../models/CPanelBarcodeReport.model";
import {TerminalBarcodeReport} from "../../models/TerminalBarcodeReport.model";

@Component({
  selector: 'app-terminal-report',
  templateUrl: './terminal-report.component.html',
  styleUrls: ['./terminal-report.component.scss']
})
export class TerminalReportComponent implements OnInit {

  terminalReportData: TerminalBarcodeReport[];

  constructor( private renderer: Renderer2, private terminalReportService: TerminalReportService) {
    this.renderer.setStyle(document.body, 'background-image', 'none');
    const User = JSON.parse(localStorage.getItem('user'));
    this.terminalReportService.getTerminalReport(User.userId).subscribe();
    this.terminalReportService.terminalListListener().subscribe((response)=>{
      this.terminalReportData = response;
    })
  }

  ngOnInit(): void {
    // this.terminalReport.getTerminalReport();
  }

}
