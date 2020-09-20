import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterApplicationFormPageRoutingModule } from './filter-application-form-routing.module';

import { FilterApplicationFormPage } from './filter-application-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterApplicationFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FilterApplicationFormPage]
})
export class FilterApplicationFormPageModule {}
