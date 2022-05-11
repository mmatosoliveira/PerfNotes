import { Observable } from 'rxjs/internal/Observable';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { HotkeysService, Options } from 'src/app/services/hotkeys/hotkeys.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false;
  isOpened : boolean = true;

  @Output()
  toggleSidenav : EventEmitter<boolean> = new EventEmitter();

  @Output()
  onToggleTheme : EventEmitter<boolean> = new EventEmitter();

  constructor(
    private localStorage : LocalStorageService,
    private hotkeysService : HotkeysService
  ) {
    this.isDark = this.localStorage.get<boolean>('isDark', true);
    this.hotkeysService.addShortcut({ keys: 'alt.n' }).pipe(
      take(2)
    ).subscribe(x => this.abrirCadastro());
  }

  ngOnInit(): void { }

  ngOnDestroy(): void{}

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.localStorage.set('isDark', this.isDark);
    this.onToggleTheme.emit(this.isDark);
  }

  abrirCadastro(){
    alert("Vai abrir a tela de cadastro!");
  }

}
