import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-manager-application-form',
  templateUrl: './manager-application-form.page.html',
  styleUrls: ['./manager-application-form.page.scss'],
})
export class ManagerApplicationFormPage implements OnInit {
  data: any[] = [];
  manager = true;

  constructor(private dataService: DataService, private navCtrl: NavController) { }

  ngOnInit() {
    this.dataService.getAllData().subscribe(res => {
      this.data = res;
    })
  }

  onFillterAF(manager, loaiDon: number){
    this.navCtrl.navigateForward('filter-application-form', {
      state: {
        duLieu: {
          manager: manager,
          loaiDon: loaiDon
        }
      }
    });
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
