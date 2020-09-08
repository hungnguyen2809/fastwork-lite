import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsWorkPage } from './details-work.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsWorkPageRoutingModule {}
