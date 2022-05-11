import { Injectable } from '@angular/core';
import { NotaPerformance } from 'src/app/models/nota-performance.model';

@Injectable({
  providedIn: 'root'
})
export class BuscadorDatasNotasService {

  constructor() { }

  buscarDatasNotasSalvas(){
    return [new Date(), new Date(2022, 3, 25)];
  }

  buscarNotasPorData(data: Date): NotaPerformance[]{
    return [
      {titulo: 'as', data: new Date()} as NotaPerformance,
      {titulo: 'df', data: new Date()} as NotaPerformance
    ];
  }
}
