import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalReportRoutingModule } from './terminal-report-routing.module';
import {TerminalReportComponent} from '../../../pages/terminal-report/terminal-report.component';


@NgModule({
  imports: [
    CommonModule,
    TerminalReportRoutingModule
  ],
  declarations: [
    TerminalReportComponent
  ],
  exports: [
    TerminalReportComponent
  ]
})
export class TerminalReportModule { }
