import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPageComponent } from 'src/app/components/filter-page/filter-page.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-application-form',
  templateUrl: './filter-application-form.page.html',
  styleUrls: ['./filter-application-form.page.scss'],
})
export class FilterApplicationFormPage implements OnInit {
  data = [];
  constructor(private dataSvc: DataService, private modalCtrl: ModalController) {
    this.dataSvc.getAllData().subscribe(res => {
      this.data = res;
    });
  }

  ngOnInit() {
  }

  async onShowFilter(){
    const filter =  await this.modalCtrl.create({
      component: FilterPageComponent,
      id: 'modal-filter-af',
      animated: true,
      keyboardClose: true,
      backdropDismiss: true,
    });

    filter.present();
  }


}
