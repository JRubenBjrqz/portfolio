import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'uxui',
    loadChildren: () =>
      import('./pages/ux-ui-designs/ux-ui-designs.module').then((m) => m.UxUiDesignsModule)
  },
  {
    path: 'visual',
    loadChildren: () =>
      import('./pages/visual-designs/visual-designs.module').then((m) => m.VisualDesignsModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
