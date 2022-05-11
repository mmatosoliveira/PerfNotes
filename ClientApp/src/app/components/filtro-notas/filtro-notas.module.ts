import { MaterialComponentsModule } from './../../shared/material-components/material-components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FiltroNotasComponent } from './filtro-notas.component';

@NgModule({
  declarations: [FiltroNotasComponent],
  imports: [CommonModule, MaterialComponentsModule],
  exports: [FiltroNotasComponent],
})
export class FiltroNotasModule {}
