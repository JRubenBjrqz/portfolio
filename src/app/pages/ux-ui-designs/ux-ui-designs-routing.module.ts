import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UxUiDesignsComponent } from './ux-ui-designs.component';
import { TopspinComponent } from './ui/topspin/topspin.component';
import { DasanaComponent } from './ui/dasana/dasana.component';
import { ElectiumComponent } from './ui/electium/electium.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UxUiDesignsComponent },
      { path: 'TopSpinMusic', component: TopspinComponent },
      { path: 'Dasana', component: DasanaComponent },
      { path: 'Electium', component: ElectiumComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UxUiDesignsRoutingModule { }
