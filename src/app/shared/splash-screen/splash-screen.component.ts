import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { SplashScreenService } from './data-access/splash-screen.service';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements AfterViewInit {

  constructor(
    private element: ElementRef,
    private splashScreenService: SplashScreenService
  ) {}

  ngAfterViewInit() {
    // Check if the splash screen should be shown
    if (this.splashScreenService.shouldShow()) {
      // Name
      setTimeout(() => {
        const nameSplashScreen = this.element.nativeElement.querySelector('#nameSplashScreen');
        if (nameSplashScreen) {
          nameSplashScreen.style.transition = 'opacity 1s ease-in-out';
          nameSplashScreen.style.opacity = '0';
        }
      }, 1000);

      // Portfolio
      setTimeout(() => {
        const portfolioSplashScreen = this.element.nativeElement.querySelector('#portfolioSplashScreen');
        if (portfolioSplashScreen) {
          portfolioSplashScreen.style.transition = 'opacity 1.5s ease-in-out';
          portfolioSplashScreen.style.opacity = '0';
        }
      }, 1500);

      // Splash screen
      setTimeout(() => {
        const splashScreen = this.element.nativeElement.querySelector('#splashScreen');
        if (splashScreen) {
          splashScreen.style.transition = 'opacity 2s ease-in-out';
          splashScreen.style.opacity = '0';
          
          // After fading out, you can choose to hide the element
          setTimeout(() => {
            splashScreen.style.display = 'none';
            this.splashScreenService.hide();
          }, 2000); // 2000ms (2 seconds) for hiding the element
        }
      }, 2000);
    }
  }

}
