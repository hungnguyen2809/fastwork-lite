import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerApplicationFormPageRoutingModule } from './manager-application-form-routing.module';

import { ManagerApplicationFormPage } from './manager-application-form.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerApplicationFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ManagerApplicationFormPage]
})
export class ManagerApplicationFormPageModule {}
