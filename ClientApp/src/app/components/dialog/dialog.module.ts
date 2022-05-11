import { MaterialComponentsModule } from './../../shared/material-components/material-components.module';
import { DialogComponent } from './dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports:[
    DialogComponent
  ]
})
export class DialogModule { }
