import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-history-employee-af',
  templateUrl: './history-employee-af.component.html',
  styleUrls: ['./history-employee-af.component.scss'],
})
export class HistoryEmployeeAfComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController, private navCtrl: NavController) { }

  ngOnInit() {}

  onHistory(){
    this.popoverCtrl.dismiss(null, null, "pop-history-empl");
    this.navCtrl.navigateForward('filter-application-form', {
      state: {
        duLieu: {
          manager: false,
          loaiDon: null
        }
      }
    });
  }

}
