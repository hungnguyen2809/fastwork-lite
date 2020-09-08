import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailsWorkPageRoutingModule } from './details-work-routing.module';
import { DetailsWorkPage } from './details-work.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsWorkPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetailsWorkPage]
})
export class DetailsWorkPageModule {}
