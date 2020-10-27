import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ifError } from 'assert';
import { FilterPageComponent } from 'src/app/components/filter-page/filter-page.component';
import { Authentication } from 'src/app/providers/auth/auth';
import { PresentDialog } from 'src/app/providers/presentDialog/presentDialog';
import { TypeApplicationForm } from 'src/app/providers/type-application-form/type.af';
import { DataUserService } from 'src/app/services/data-user.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-application-form',
  templateUrl: './filter-application-form.page.html',
  styleUrls: ['./filter-application-form.page.scss'],
})
export class FilterApplicationFormPage implements OnInit {
  dataDon = [];
  manager = true;
  loaiDon: any;
  trangThais = [];
  choosedStatus = "dd";
  dons = [];

  constructor(
    private dataSvc: DataService, 
    private modalCtrl: ModalController, 
    private navCtrl: NavController,
    private router: Router,
    private auth: Authentication,
    private authUser: DataUserService,
    private presentDialog: PresentDialog,
    private typeApplicationForm : TypeApplicationForm,
    private alertCtrl: AlertController
    ) 
  {
    // this.dataSvc.getAllData().subscribe(res => {
    //   this.data = res;
    // });

    this.loaiDon = {
      ten: 'Loại đơn',
      ma: null
    }

    this.initDuLieu();
    this.initTrangThai();
    this.initLoaiDons();
  }

  initDuLieu(){
    const duLieu = this.router.getCurrentNavigation().extras.state.duLieu;
    this.manager = duLieu.manager;
    // console.log(duLieu);
  }

  initTrangThai(){
    this.trangThais = [
      {
        ma: "cd",
        ten: "Chờ duyệt"
      },
      {
        ma: "dd",
        ten: "Đã duyệt"
      },
      {
        ma: "kd",
        ten: "Không duyệt"
      },
    ]
  }

  initLoaiDons() {
    this.dons = this.typeApplicationForm.getAllDon();
  }

  ionViewWillEnter(){
  }

  ngOnInit() {
    this.getDataAF(this.choosedStatus);
  }

  getDataAF(trangThai: string){
    this.presentDialog.presentLoadding("Đang tải !", (loading) => {
      this.authUser.getInforUser().then(user => {
        const params:{next: number, skip: number, status: string, createdBy:string} = {
          next: 20,
          skip: 0,
          status: this.trangThais.find((item) => { return item.ma == trangThai }).ten,
          createdBy: user.email
        }
        // console.log(params);
  
        this.authUser.getOrgUser().then(org => {
          const url = "hrmletter/summary/" + org._id;
          this.auth.GET2(url, params).then((res: any) => {
            loading.dismiss();
            // console.log(res);
            let data = res.result;

            // console.log(loaiDon);
            if(this.loaiDon.ma == null){
              console.log(data);
              this.dataDon = data;
            }
            else{
              data = data.filter(item => {
                return item.type == this.loaiDon.ma;
              });
              this.dataDon = data;
              console.log(data);
            }
          });
        });
      });
    });
  }

  onModifyStatus(maTrangThai){
    this.choosedStatus = maTrangThai;
    this.getDataAF(maTrangThai);
  }

  async chonLoaiDon(){
    const alert =  await this.alertCtrl.create({
      subHeader: "Chọn đơn",
      inputs: this.dons.map((item => {
        return {
          type: "radio",
          label: `${item.sub}`,
          handler: () => { 
            this.loaiDon = item;
            // console.log(this.loaiDon);
            this.getDataAF(this.choosedStatus);
            alert.dismiss();
          },
        }
      })),
      animated: true,
      keyboardClose: true,
      cssClass: 'chon-loai-don'
    });

    alert.present();
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
