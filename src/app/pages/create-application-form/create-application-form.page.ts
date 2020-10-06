import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { IonItemSliding, LoadingController, ModalController, Platform } from '@ionic/angular';
import { TempCreateApplicationFormComponent } from 'src/app/components/temp-create-application-form/temp-create-application-form.component';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: "app-create-application-form",
	templateUrl: "./create-application-form.page.html",
	styleUrls: ["./create-application-form.page.scss"],
})
export class CreateApplicationFormPage implements OnInit {
  isIOS: boolean;
	loaiDon: number;
	tieuDeDon: string;
	dataDonTu: any[] = [];
	nguoiDuyet: any[] = [];

	constructor(
		private pltCtrl: Platform,
		private router: Router,
    private dataSev: DataService,
		private modalCtrl: ModalController,
		private loadingCtrl: LoadingController
	) {
		this.getPlatformDevice();
		this.getTypeAF();
		this.initDonTu();
	}

  ngOnInit() {
		this.nguoiDuyet = [
			{
				id: 'mbw@thangnv',
				name: 'Nguyễn Văn Thắng',
				isChecked: false
			},
			{
				id: 'ekgis@vuqd',
				name: 'Đặng Quang Vũ',
				isChecked: false
			}
		]
	}

	initDonTu(){
		this.dataSev.getAllDonTu().subscribe(res => {
			this.dataDonTu = res;

			if(this.dataDonTu.length == 0){
				this.loadingCtrl.create({
					animated: true,
					message: 'Đang tải...',
					backdropDismiss: false,
					spinner: 'dots'
				}).then(khoiTaoDonTu => {
					khoiTaoDonTu.present();
					setTimeout(() => {
						khoiTaoDonTu.dismiss();
						this.onCreateAF();
					}, 500);
				});
			}
		});
	}

	getTypeAF() {
    this.loaiDon = this.router.getCurrentNavigation().extras.state.type;
    this.dataSev.getTitleAF(this.loaiDon).subscribe(res => {
      this.tieuDeDon = res;
    });
	}

	getPlatformDevice() {
		if (this.pltCtrl.is("ios")) {
			this.isIOS = true;
		} else this.isIOS = false;
	}
	
	async onCreateAF(){
		let createAf = await this.modalCtrl.create({
			component: TempCreateApplicationFormComponent,
			componentProps: {
				data: {
					thongTin: null,
					loaiDon: this.loaiDon, 
					edit: false
				}
			},
			animated: true,
			keyboardClose: true,
			backdropDismiss: false,
			id: 'modal-create-af'
		});
		createAf.present();

		createAf.onDidDismiss().then(res => {
			console.log(res);
		})
	}
	
	async onEditAF(itemSliding: IonItemSliding){
		let createAf = await this.modalCtrl.create({
			component: TempCreateApplicationFormComponent,
			componentProps: {
				data: { 
					thongTin: 'Nội dung',
					loaiDon: this.loaiDon, 
					edit: true
				}
			},
			animated: true,
			keyboardClose: true,
			backdropDismiss: false,
			id: 'modal-create-af'
		});
		createAf.present();

		createAf.onDidDismiss().then(res => {
			console.log(res);
		});

		itemSliding.close();
	}

	onDeleteAF(viTri, itemSliding: IonItemSliding){
		itemSliding.close();
		console.log(viTri);
	}

	onSubmitForm(){
		console.log(this.nguoiDuyet);
	}


}
