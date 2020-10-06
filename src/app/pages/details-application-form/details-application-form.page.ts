import { Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-details-application-form',
  templateUrl: './details-application-form.page.html',
  styleUrls: ['./details-application-form.page.scss'],
})
export class DetailsApplicationFormPage {
  //2 là đang chờ, nên sẽ hiện 2 nút, 1 đồng ý, 3 từ chối thì hiện nút hủy bỏ
  data: any;
  manager:boolean;
  showKeyboard: boolean = false;
  contentComment: string = '';
  @ViewChild('inputText') inputText: IonTextarea;

  constructor(private router:Router, private keyboardCtrl: Keyboard) {
    const dulieu = this.router.getCurrentNavigation().extras.state.dulieu;
    this.data = dulieu.data;
    this.manager = dulieu.manager;
  }

  onShowInputComment(){
    this.showKeyboard = true;
    setTimeout(()=>{
      this.inputText.setFocus();
      this.inputText.ionBlur.subscribe(()=>{
        setTimeout(()=>{
          this.showKeyboard = false;
        },50);
      });
    },50);
  }

  onSendComments(){
    this.contentComment = '';
  }

}
