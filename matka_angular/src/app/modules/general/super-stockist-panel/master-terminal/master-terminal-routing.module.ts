import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterTerminalComponent} from '../../../../pages/super-stockist/master-terminal/master-terminal.component';
import {AuthGuardSuperStockistServiceGuard} from "../../../../services/auth-guard-super-stockist-service.guard";

const routes: Routes = [
  { path: '', canActivate : [AuthGuardSuperStockistServiceGuard], component: MasterTerminalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterTerminalRoutingModule { }
