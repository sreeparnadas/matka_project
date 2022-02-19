import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockistResultComponent} from '../../../../pages/stockistPanel/stockist-result/stockist-result.component';
import {AuthGuardStockistServiceService} from '../../../../services/auth-guard-stockist-service.service';

const routes: Routes = [
  { path: '' , canActivate : [AuthGuardStockistServiceService] , component: StockistResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockistResultRoutingModule { }
