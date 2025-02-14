import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'antikythera',
    loadChildren: () => import('./antikythera/antikythera.module').then(m => m.AntikytheraModule)
  },
  {
    path: 'harwell',
    loadChildren: () => import('./harwell/harwell.module').then(m => m.HarwellModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
