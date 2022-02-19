import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterTerminalComponent} from '../../../../pages/stockistPanel/master-terminal/master-terminal.component';
import {AuthGuardStockistServiceService} from '../../../../services/auth-guard-stockist-service.service';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardStockistServiceService] ,  component: MasterTerminalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterTerminalRoutingModule { }
