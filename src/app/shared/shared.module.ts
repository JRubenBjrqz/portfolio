import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SplashScreenComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SplashScreenComponent
  ]
})
export class SharedModule { }
