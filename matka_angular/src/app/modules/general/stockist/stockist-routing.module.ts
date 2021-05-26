import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockistComponent} from '../../../pages/stockist/stockist.component';
import {AuthGuardStockistServiceService} from '../../../services/auth-guard-stockist-service.service';

const routes: Routes = [
  { path: '', canActivate : [AuthGuardStockistServiceService], component: StockistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockistRoutingModule { }
