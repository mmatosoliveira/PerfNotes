import { NotaPerformance } from './../../models/nota-performance.model';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BuscadorDatasNotasService } from 'src/app/services/buscador-datas-notas/buscador-datas-notas.service';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isDark: boolean = true;
  notas: NotaPerformance[] = [];
  @ViewChild('sidenav') sidenav!: SidenavComponent;

  constructor(
    private buscador: BuscadorDatasNotasService,
    private localStorage: LocalStorageService
  ) {
    this.isDark = this.localStorage.get<boolean>('isDark', true);
  }

  ngOnInit(): void {}

  buscarNotasNaData(data: Date) {
    this.notas = this.buscador.buscarNotasPorData(data);
  }

  toggleSidenav() {
    this.sidenav!.toggleSidenav();
  }
}
