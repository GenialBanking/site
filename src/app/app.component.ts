import { Component } from '@angular/core';

import { UtilService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor (
    private utilService: UtilService
  ) {}

  public toggleViewMode(): void {
    const darkModeSetted: string = this.utilService.getDarkModeLocalData();

    !darkModeSetted ? this.setDarkMode() : this.setLigthMode();
  }

  private setLigthMode(): void {
    this.utilService.removeDarkModeLocalData();
    document.body.classList.remove('dark-mode');
  }

  private setDarkMode(): void {
    this.utilService.setDarkModeLocalData();
    document.body.classList.add('dark-mode');
  }
}
