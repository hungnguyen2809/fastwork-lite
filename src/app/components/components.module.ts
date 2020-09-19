import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SubstringTitleApplicationFormPipe } from '../pipes/substring-title-application-form.pipe';



@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ApplicationFormComponent
  ],
  declarations: [
    ApplicationFormComponent,
    SubstringTitleApplicationFormPipe
  ]
})
export class ComponentsModule {}