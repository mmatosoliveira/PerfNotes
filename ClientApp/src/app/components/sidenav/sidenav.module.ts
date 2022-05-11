import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialComponentsModule } from './../../shared/material-components/material-components.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class SidenavModule { }
