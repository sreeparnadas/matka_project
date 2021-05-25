import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TerminalComponent} from '../../../pages/terminal/terminal.component';
import {AuthGuardTerminalServiceService} from '../../../services/auth-guard-terminal-service.service';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardTerminalServiceService], component: TerminalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminalRoutingModule { }
