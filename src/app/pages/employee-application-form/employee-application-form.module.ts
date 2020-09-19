import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeApplicationFormPageRoutingModule } from './employee-application-form-routing.module';

import { EmployeeApplicationFormPage } from './employee-application-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeApplicationFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EmployeeApplicationFormPage]
})
export class EmployeeApplicationFormPageModule {}
