import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { UxUiDesignsRoutingModule } from './ux-ui-designs-routing.module';

import { UxUiDesignsComponent } from './ux-ui-designs.component';
import { TopspinComponent } from './ui/topspin/topspin.component';
import { DasanaComponent } from './ui/dasana/dasana.component';
import { ElectiumComponent } from './ui/electium/electium.component';


@NgModule({
  declarations: [
    UxUiDesignsComponent,
    TopspinComponent,
    DasanaComponent,
    ElectiumComponent
  ],
  imports: [
    CommonModule,
    UxUiDesignsRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class UxUiDesignsModule { }
