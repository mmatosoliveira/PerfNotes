import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BuscadorDatasNotasService } from 'src/app/services/buscador-datas-notas/buscador-datas-notas.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  datas: Date[] = [];
  dataSelecionada: Date | null = null;
  isOpened: boolean = true;

  @Output()
  aoSelecionarData: EventEmitter<Date> = new EventEmitter();

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private buscadorDatas: BuscadorDatasNotasService) {}

  ngOnInit(): void {
    this.buscarDatasNotas();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  buscarDatasNotas() {
    this.datas = this.buscadorDatas.buscarDatasNotasSalvas();
  }
}
