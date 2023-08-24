import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualDesignsComponent } from './visual-designs.component';

const routes: Routes = [
  {
    path: '',
    component: VisualDesignsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualDesignsRoutingModule { }
