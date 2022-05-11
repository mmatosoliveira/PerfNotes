import { ListaNotasComponent } from './lista-notas.component';
import { MaterialComponentsModule } from './../../shared/material-components/material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ListaNotasComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports:[
    ListaNotasComponent
  ]
})
export class ListaNotasModule { }
