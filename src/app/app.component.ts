import { Component } from '@angular/core';
import { SplashScreenService } from './shared/splash-screen/data-access/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public splashScreenService: SplashScreenService) {
    if (!this.splashScreenService.shouldShow()) {
      // If splash screen is already hidden, hide it without navigation
      this.splashScreenService.hide();
    }
  }
  title = 'portfolio';
}
