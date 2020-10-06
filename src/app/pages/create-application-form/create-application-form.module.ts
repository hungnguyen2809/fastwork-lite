import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateApplicationFormPageRoutingModule } from './create-application-form-routing.module';

import { CreateApplicationFormPage } from './create-application-form.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateApplicationFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateApplicationFormPage]
})
export class CreateApplicationFormPageModule {}
