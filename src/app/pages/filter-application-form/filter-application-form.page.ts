import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { FilterPageComponent } from 'src/app/components/filter-page/filter-page.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-application-form',
  templateUrl: './filter-application-form.page.html',
  styleUrls: ['./filter-application-form.page.scss'],
})
export class FilterApplicationFormPage implements OnInit {
  data = [];
  manager = true;
  loaiDon: number = null;
  constructor(
    private dataSvc: DataService, 
    private modalCtrl: ModalController, 
    private navCtrl: NavController,
    private router: Router
    ) 
  {
    this.dataSvc.getAllData().subscribe(res => {
      this.data = res;
    });

    this.initDuLieu();
  }

  initDuLieu(){
    const duLieu = this.router.getCurrentNavigation().extras.state.duLieu;
    this.manager = duLieu.manager;
    this.loaiDon = duLieu.loaiDon;
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
      mode: 'ios'
    });

    filter.present();
  }

  onDetailsAF(manager, data){
		this.navCtrl.navigateForward('details-application-form', {
			state: {
				dulieu: {
					manager: manager,
					data: data
				}
			}
		});
	}
}
