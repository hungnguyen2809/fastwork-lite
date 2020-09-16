import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'details-work',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'application-form',
    loadChildren: () => import('./pages/application-form/application-form.module').then( m => m.ApplicationFormPageModule)
  },
  {
    path: 'details-application-form',
    loadChildren: () => import('./pages/details-application-form/details-application-form.module').then( m => m.DetailsApplicationFormPageModule)
  },
  {
    path: '',
    redirectTo: 'details-work',
    // redirectTo: 'application-form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
