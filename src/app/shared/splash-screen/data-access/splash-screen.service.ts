import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {
  private showSplash = true;

  constructor() { }

  // Method to set the splash screen as shown
  hide() {
    this.showSplash = false;
  }

  // Method to check if the splash screen should be displayed
  shouldShow() {
    return this.showSplash;
  }
}
