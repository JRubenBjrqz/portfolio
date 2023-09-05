import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UxUiDesignsComponent } from './ux-ui-designs.component';
import { TopspinComponent } from './ui/topspin/topspin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UxUiDesignsComponent },
      { path: 'TopSpinMusic', component: TopspinComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UxUiDesignsRoutingModule { }
