import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateApplicationFormPage } from './create-application-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreateApplicationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateApplicationFormPageRoutingModule {}
