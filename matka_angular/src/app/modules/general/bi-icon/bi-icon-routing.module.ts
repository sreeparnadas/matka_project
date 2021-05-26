import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BiIconComponent} from '../../../pages/bi-icon/bi-icon.component';

const routes: Routes = [
  { path: '',  component: BiIconComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiIconRoutingModule { }
