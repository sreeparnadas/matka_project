import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from 'src/app/pages/cpanel/settings/settings.component';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  exports: [
    // SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
  ]
})
export class SettingsModule { }
