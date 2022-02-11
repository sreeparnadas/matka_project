import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuperStockistComponent} from '../../../pages/super-stockist/super-stockist.component';

const routes: Routes = [
  { path: '',  component: SuperStockistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperStockistPanelRoutingModule { }
