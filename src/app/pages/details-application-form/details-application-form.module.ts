import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsApplicationFormPageRoutingModule } from './details-application-form-routing.module';

import { DetailsApplicationFormPage } from './details-application-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsApplicationFormPageRoutingModule
  ],
  declarations: [DetailsApplicationFormPage]
})
export class DetailsApplicationFormPageModule {}
