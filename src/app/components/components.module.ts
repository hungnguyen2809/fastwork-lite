import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SubstringTitleApplicationFormPipe } from '../pipes/substring-title-application-form.pipe';
import { FilterPageComponent } from './filter-page/filter-page.component';


@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ApplicationFormComponent,
  ],
  declarations: [
    ApplicationFormComponent,
    SubstringTitleApplicationFormPipe,
    FilterPageComponent
  ]
})
export class ComponentsModule {}