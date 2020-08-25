import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFormCardOneComponent } from './component-form-card-one/component-form-card-one.component';
import { ComponentFormCardTwoComponent } from './component-form-card-two/component-form-card-two.component';
import { ComponentFormCardThreeComponent } from './component-form-card-three/component-form-card-three.component';
import { ComponentProjectOneComponent } from './component-project-one/component-project-one.component';
import { ComponentProjectTwoComponent } from './component-project-two/component-project-two.component';
import { ComponentWorkCardOneComponent } from './component-work-card-one/component-work-card-one.component';
import { ComponentWorkCardTwoComponent } from './component-work-card-two/component-work-card-two.component';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ComponentFormCardOneComponent,
    ComponentFormCardTwoComponent,
    ComponentFormCardThreeComponent,
    ComponentProjectOneComponent,
    ComponentProjectTwoComponent,
    ComponentWorkCardOneComponent,
    ComponentWorkCardTwoComponent
  ],
  declarations: [
    ComponentFormCardOneComponent,
    ComponentFormCardTwoComponent,
    ComponentFormCardThreeComponent,
    ComponentProjectOneComponent,
    ComponentProjectTwoComponent,
    ComponentWorkCardOneComponent,
    ComponentWorkCardTwoComponent
  ]
})
export class ComponentsModule {}