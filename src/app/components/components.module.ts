import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SubstringTitleApplicationFormPipe } from '../pipes/substring-title-application-form.pipe';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { TempCreateApplicationFormComponent } from './temp-create-application-form/temp-create-application-form.component';
import { ContentApplicationFormComponent } from './content-application-form/content-application-form.component';
import { HistoryEmployeeAfComponent } from './history-employee-af/history-employee-af.component';


@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    ApplicationFormComponent,
    TempCreateApplicationFormComponent,
    ContentApplicationFormComponent,
    SubstringTitleApplicationFormPipe,
    FilterPageComponent,
    HistoryEmployeeAfComponent,
  ],
  exports: [
    ApplicationFormComponent,
    TempCreateApplicationFormComponent,
    ContentApplicationFormComponent,
  ],
})
export class ComponentsModule {}