import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-temp-create-application-form',
  templateUrl: './temp-create-application-form.component.html',
  styleUrls: ['./temp-create-application-form.component.scss'],
})
export class TempCreateApplicationFormComponent implements OnInit {
  loaiDon: number;
  edit: boolean;
  thongTin: any;
  constructor(private modalCtrl: ModalController, private navParams: NavParams) {
    this.getParamsData();
  }

  ngOnInit() {
    
  }

  getParamsData(){
    if(this.navParams.get("data")){
      this.loaiDon = this.navParams.get("data").loaiDon;
      this.edit = this.navParams.get("data").edit;
      
      if(this.navParams.get('data').thongTin != null){
        this.thongTin = this.navParams.get('data').thongTin;
      }
    }
  }

  onClose(){
    this.modalCtrl.dismiss(this.thongTin, null, "modal-create-af");
  }

}
