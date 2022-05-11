import { FiltroNotasModule } from './../filtro-notas/filtro-notas.module';
import { MaterialComponentsModule } from './../../shared/material-components/material-components.module';
import { ToolbarModule } from './../toolbar/toolbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { ListaNotasModule } from '../lista-notas/lista-notas.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    SidenavModule,
    ListaNotasModule,
    FiltroNotasModule,
    MaterialComponentsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
