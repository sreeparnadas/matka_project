import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardTerminalServiceService} from '../../../services/auth-guard-terminal-service.service';
import {TerminalReportComponent} from '../../../pages/terminal-report/terminal-report.component';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardTerminalServiceService], component: TerminalReportComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminalReportRoutingModule { }
