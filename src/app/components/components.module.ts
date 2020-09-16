import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { CardThanhComponent } from './card-thanh/card-thanh.component';
import { DetailWorkComponent } from './detail-work/detail-work.component';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    CardDemoComponent,
    CardThanhComponent,
    DetailWorkComponent,
  ],
  declarations: [
    CardDemoComponent,
    CardThanhComponent,
    DetailWorkComponent,
  ]
})
export class ComponentsModule {}