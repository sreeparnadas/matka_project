import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockiestReportComponent} from '../../../../pages/stockistPanel/stockiest-report/stockiest-report.component';
import {AuthGuardStockistServiceService} from '../../../../services/auth-guard-stockist-service.service';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardStockistServiceService], component: StockiestReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockistReportRoutingModule { }
