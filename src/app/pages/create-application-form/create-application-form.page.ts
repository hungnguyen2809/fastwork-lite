import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-create-application-form',
  templateUrl: './create-application-form.page.html',
  styleUrls: ['./create-application-form.page.scss'],
})
export class CreateApplicationFormPage implements OnInit {
  isIOS: boolean = true;
  typeAF: number;
  titleAF: string;
  constructor(private pltCtrl: Platform, private router:Router) {
    this.getPlatformDevice();

    this.getTypeAF();

    this.setTitleAF(this.typeAF);
  }

  ngOnInit() {
  }

  getTypeAF(){
    this.typeAF = this.router.getCurrentNavigation().extras.state.type;
  }

  setTitleAF(typeAF: number){
    if(typeAF == 1) this.titleAF = "Xin nghỉ phép";
    if(typeAF == 2) this.titleAF = "Xin vắng mặt";
    if(typeAF == 3) this.titleAF = "Xin tăng ca";
    if(typeAF == 4) this.titleAF = "Xin làm thêm";
    if(typeAF == 5) this.titleAF = "Xin công tác";
    if(typeAF == 6) this.titleAF = "Xin chế độ";
    if(typeAF == 7) this.titleAF = "Xin đổi ca";
    if(typeAF == 8) this.titleAF = "Xin giải trình chấm công";
  }

  getPlatformDevice(){
    if(this.pltCtrl.is("ios")){
      this.isIOS = true;
    }
    else this.isIOS = false;
  }

}
