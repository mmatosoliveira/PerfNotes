import { Component, Input, OnInit } from '@angular/core';
import { NotaPerformance } from 'src/app/models/nota-performance.model';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit {

  @Input()
  nota : NotaPerformance | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
