import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuperStockistReportComponent} from '../../../../pages/super-stockist/super-stockist-report/super-stockist-report.component';
import {AuthGuardSuperStockistServiceGuard} from '../../../../services/auth-guard-super-stockist-service.guard';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardSuperStockistServiceGuard],  component: SuperStockistReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperStockistReportRoutingModule { }
