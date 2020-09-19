import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeApplicationFormPage } from './employee-application-form.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeApplicationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeApplicationFormPageRoutingModule {}
