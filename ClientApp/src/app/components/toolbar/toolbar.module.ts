import { MaterialComponentsModule } from './../../shared/material-components/material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }
