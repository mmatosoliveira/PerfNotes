import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private overlayContainer: OverlayContainer){

  }

  title = 'Performance Notes';

  isDarkMode: boolean = true;

  changeTheme(isDark: boolean){
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }
}
