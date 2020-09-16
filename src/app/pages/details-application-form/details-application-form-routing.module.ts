import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsApplicationFormPage } from './details-application-form.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsApplicationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsApplicationFormPageRoutingModule {}
