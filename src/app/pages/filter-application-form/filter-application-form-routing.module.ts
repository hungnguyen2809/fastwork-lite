import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterApplicationFormPage } from './filter-application-form.page';

const routes: Routes = [
  {
    path: '',
    component: FilterApplicationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterApplicationFormPageRoutingModule {}
