import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UxUiDesignsRoutingModule } from './ux-ui-designs-routing.module';

import { UxUiDesignsComponent } from './ux-ui-designs.component';


@NgModule({
  declarations: [
    UxUiDesignsComponent
  ],
  imports: [
    CommonModule,
    UxUiDesignsRoutingModule,
    RouterModule
  ]
})
export class UxUiDesignsModule { }
