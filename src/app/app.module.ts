import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UxUiDesignsComponent } from './pages/ux-ui-designs/ux-ui-designs.component';
import { VisualDesignsComponent } from './pages/visual-designs/visual-designs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UxUiDesignsComponent,
    VisualDesignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
