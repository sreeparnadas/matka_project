import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockiestReportComponent} from "../../../../pages/stockistPanel/stockiest-report/stockiest-report.component";

const routes: Routes = [
  { path: '', component: StockiestReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockistReportRoutingModule { }
