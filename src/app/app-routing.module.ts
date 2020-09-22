import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'details-work',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'details-application-form',
    loadChildren: () => import('./pages/details-application-form/details-application-form.module').then( m => m.DetailsApplicationFormPageModule)
  },
  {
    path: 'manager-application-form',
    loadChildren: () => import('./pages/manager-application-form/manager-application-form.module').then( m => m.ManagerApplicationFormPageModule)
  },
  {
    path: 'employee-application-form',
    loadChildren: () => import('./pages/employee-application-form/employee-application-form.module').then( m => m.EmployeeApplicationFormPageModule)
  },
  {
    path: 'filter-application-form',
    loadChildren: () => import('./pages/filter-application-form/filter-application-form.module').then( m => m.FilterApplicationFormPageModule)
  },
  {
    path: 'create-application-form',
    loadChildren: () => import('./pages/create-application-form/create-application-form.module').then( m => m.CreateApplicationFormPageModule)
  },
  {
    path: '',
    redirectTo: 'employee-application-form',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
