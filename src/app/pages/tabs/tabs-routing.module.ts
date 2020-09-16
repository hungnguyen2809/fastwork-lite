import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'details-work',
        loadChildren: () => import('./../details-work/details-work.module').then( m => m.DetailsWorkPageModule)
      },
      {
        path: 'comment',
        loadChildren: () => import('./../comment/comment.module').then( m => m.CommentPageModule)
      },
      {
        path: 'attachment',
        loadChildren: () => import('./../attachment/attachment.module').then( m => m.AttachmentPageModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('./../activity/activity.module').then( m => m.ActivityPageModule)
      },
      {
        path: "",
        redirectTo: "details-work",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "details-work",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
