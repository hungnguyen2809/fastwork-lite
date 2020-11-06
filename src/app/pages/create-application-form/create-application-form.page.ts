import { TypeApplicationForm } from 'src/app/providers/type-application-form/type.af';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
	IonItemSliding,
	LoadingController,
	ModalController,
	NavController,
	Platform,
} from "@ionic/angular";
import { TempCreateApplicationFormComponent } from "src/app/components/temp-create-application-form/temp-create-application-form.component";
import { Authentication } from 'src/app/providers/auth/auth';
import { PresentDialog } from 'src/app/providers/presentDialog/presentDialog';
import { DataUserService } from 'src/app/services/data-user.service';
import { DataService } from "src/app/services/data.service";

@Component({
	selector: "app-create-application-form",
	templateUrl: "./create-application-form.page.html",
	styleUrls: ["./create-application-form.page.scss"],
})
export class CreateApplicationFormPage implements OnInit, OnDestroy {
	isIOS: boolean;

	tieuDeDon: string;

	dataDonTu: any[] = [];
	nguoiDuyet: any[] = [];
	nguoiThongBao: any[] = [];
	moTa: string;

	ngayNghiPhep: any;
	maLoaiDon: string;

	constructor(
		private pltCtrl: Platform,
		private router: Router,
		private dataSev: DataService,
		private modalCtrl: ModalController,
		private loadingCtrl: LoadingController,
		private navCtrl: NavController,
		private presentDialog: PresentDialog,
		private auth: Authentication,
		private dataUser: DataUserService,
		private typeApplicationForm: TypeApplicationForm
	) {
		this.getPlatformDevice();
		this.getTypeAF();
		this.initDonTu();
	}

	ngOnInit() {
		this.nguoiDuyet = [
			{
				id: "mbw@thangnv",
				name: "Nguyễn Văn Thắng",
				isChecked: false,
			},
			{
				id: "ekgis@vuqd",
				name: "Đặng Quang Vũ",
				isChecked: false,
			},
		];
	}

	initDonTu() {
		// this.dataSev.getAllDonTu().subscribe((res) => {
		// 	this.dataDonTu = res;

		// 	if (this.dataDonTu.length == 0) {
		// 		this.loadingCtrl
		// 			.create({
		// 				animated: true,
		// 				message: "Đang tải...",
		// 				backdropDismiss: false,
		// 				spinner: "dots",
		// 			})
		// 			.then((khoiTaoDonTu) => {
		// 				khoiTaoDonTu.present();
		// 				setTimeout(() => {
		// 					khoiTaoDonTu.dismiss();
		// 					this.onCreateAF();
		// 				}, 500);
		// 			});
		// 	}
		// });
	}

	getTypeAF() {
		this.maLoaiDon = this.router.getCurrentNavigation().extras.state.maLoaiDon;
		this.ngayNghiPhep = this.router.getCurrentNavigation().extras.state.ngayNghiPhep;
		this.tieuDeDon = this.typeApplicationForm.getDon(this.maLoaiDon).ten;

		// console.log(this.ngayNghiPhep);
	}

	getPlatformDevice() {
		if (this.pltCtrl.is("ios")) {
			this.isIOS = true;
		} else this.isIOS = false;
	}

	async onCreateAF() {
		let createAf = await this.modalCtrl.create({
			component: TempCreateApplicationFormComponent,
			componentProps: {
				data: {
					thongTin: null,
					loaiDon: this.maLoaiDon,
					edit: false,
				},
			},
			animated: true,
			keyboardClose: true,
			backdropDismiss: false,
			id: "modal-create-af",
		});
		createAf.present();

		createAf.onDidDismiss().then((response) => {
			if (response.data != null) {
				this.dataDonTu.push(response.data);
			} else {
				setTimeout(
					() => {
						this.navCtrl.navigateBack("employee-application-form");
					},
					this.isIOS ? 0 : 250
				);
			}
		});
	}

	async onEditAF(noiDungDon: any ,itemSliding: IonItemSliding) {
		let createAf = await this.modalCtrl.create({
			component: TempCreateApplicationFormComponent,
			componentProps: {
				data: {
					thongTin: noiDungDon,
					loaiDon: this.maLoaiDon,
					edit: true,
				},
			},
			animated: true,
			keyboardClose: true,
			backdropDismiss: false,
			id: "modal-create-af",
		});
		createAf.present();

		createAf.onDidDismiss().then((res) => {
			console.log(res);
		});

		itemSliding.close();
	}

	onDeleteAF(viTri, itemSliding: IonItemSliding) {
		itemSliding.close();
		console.log(viTri);
	}

	onSubmitForm() {
		console.log(this.moTa);
	}

	ngOnDestroy() {}
}
