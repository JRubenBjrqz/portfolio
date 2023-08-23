import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VisualDesignsRoutingModule } from './visual-designs-routing.module';

import { VisualDesignsComponent } from './visual-designs.component';


@NgModule({
  declarations: [
    VisualDesignsComponent
  ],
  imports: [
    CommonModule,
    VisualDesignsRoutingModule,
    RouterModule
  ]
})
export class VisualDesignsModule { }
