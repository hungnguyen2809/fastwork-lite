import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerApplicationFormPage } from './manager-application-form.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerApplicationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerApplicationFormPageRoutingModule {}
