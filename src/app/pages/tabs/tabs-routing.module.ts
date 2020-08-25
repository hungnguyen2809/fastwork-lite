import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: "form",
        loadChildren: () => import('./../form/form.module').then( m => m.FormPageModule)
      },
      {
        path: "work",
        loadChildren: () => import('./../work/work.module').then( m => m.WorkPageModule)
      },
      {
        path: "project",
        loadChildren: () => import('./../project/project.module').then( m => m.ProjectPageModule)
      },
      {
        path: "",
        redirectTo: "form",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "form",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
