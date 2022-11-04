import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public setDarkModeLocalData(): void {
    localStorage.setItem('dark-mode', 'dark-mode');
  }

  public getDarkModeLocalData(): string {
    return localStorage.getItem('dark-mode')!;
  }

  public removeDarkModeLocalData(): void {
    localStorage.removeItem('dark-mode');
  }
}
