import { TypeApplicationForm } from "./../../providers/type-application-form/type.af";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import {
	AlertController,
	IonItemSliding,
	IonTextarea,
	ModalController,
	NavController,
	ToastController,
} from "@ionic/angular";
import { TempCreateApplicationFormComponent } from "src/app/components/temp-create-application-form/temp-create-application-form.component";
import { FormatDate } from "src/app/providers/format-date/format-date";
import { DataService } from "src/app/services/data.service";

@Component({
	selector: "app-details-application-form",
	templateUrl: "./details-application-form.page.html",
	styleUrls: ["./details-application-form.page.scss"],
})
export class DetailsApplicationFormPage {
	titleAF: string;
	data: any;
	manager: boolean;
	showKeyboard: boolean = false;
	contentComment: string = "";
	dataApprovers: any[] = [];
	@ViewChild("inputText") inputText: IonTextarea;

	constructor(
		private router: Router,
		private keyboardCtrl: Keyboard,
		private navCtrl: NavController,
		private modalCtrl: ModalController,
		private alertCtrl: AlertController,
		private toastCtrl: ToastController,
		public formatDate: FormatDate,
		private typeApplicationForm: TypeApplicationForm
	) {
		this.initManagerApprovers();

		const dulieu = this.router.getCurrentNavigation().extras.state.dulieu;
		this.data = dulieu.data;
		this.manager = dulieu.manager;
		console.log(this.data);
		this.getTitleAF(this.data.type);
	}

	getTitleAF(loaiDon: string) {
		this.titleAF = this.typeApplicationForm.getDon(loaiDon).ten;
	}

	initManagerApprovers() {
		this.dataApprovers = [
			{
				ma: "nvt",
				ten: "Nguyễn Văn Thắng",
				anh: "./../../../assets/imgs/avatar.png",
			},
			{
				ma: "dqv",
				ten: "Đặng Quang Vũ",
				anh: "./../../../assets/imgs/avatar.png",
			},
			{
				ma: "ldh",
				ten: "Lê Danh Hào",
				anh: "./../../../assets/imgs/avatar.png",
			},
			{
				ma: "nmc",
				ten: "Nguyễn Mạnh Cường",
				anh: "./../../../assets/imgs/avatar.png",
			},
		];
	}

	onDisabledButtonAction(event) {
		this.showKeyboard = true;
		this.inputText.ionBlur.subscribe(() => {
			this.showKeyboard = false;
		});
	}

	onSendComments() {
		this.contentComment = "";
	}

	async onAddInformation() {
		let createAf = await this.modalCtrl.create({
			component: TempCreateApplicationFormComponent,
			componentProps: {
				data: {
					thongTin: null,
					loaiDon: this.data.type,
					edit: false,
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
	}

	async onEditAF(duLieuDon, itemSliding: IonItemSliding) {
		let createAf = await this.modalCtrl.create({
			component: TempCreateApplicationFormComponent,
			componentProps: {
				data: {
					thongTin: duLieuDon,
					loaiDon: this.data.type,
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

	initInputManagerApproverForAlert(): any[] {
		return [
			{
				value: "nvt",
				type: "checkbox",
				label: "Nguyễn Văn Thắng",
				checked:
					this.data.userApprovers.filter((item) => {
						return item.ma == "nvt";
					}).length > 0,
			},
			{
				value: "dqv",
				type: "checkbox",
				label: "Đặng Quang Vũ",
				checked:
					this.data.userApprovers.filter((item) => {
						return item.ma == "dqv";
					}).length > 0,
			},
			{
				value: "ldh",
				type: "checkbox",
				label: "Lê Danh Hào",
				checked:
					this.data.userApprovers.filter((item) => {
						return item.ma == "ldh";
					}).length > 0,
			},
			{
				value: "nmc",
				type: "checkbox",
				label: "Nguyễn Mạnh Cường",
				checked:
					this.data.userApprovers.filter((item) => {
						return item.ma == "nmc";
					}).length > 0,
			},
		];
	}

	async onEditApprover() {
		const showApprover = await this.alertCtrl.create({
			subHeader: "Người duyệt",
			mode: "ios",
			animated: true,
			inputs: this.dataApprovers.map((item) => {
				return {
					value: item.ma,
					type: "checkbox",
					label: item.ten,
				};
			}),
			buttons: [
				{
					text: "Đồng ý",
					handler: (data) => {
						this.data.userApprovers = this.dataApprovers.filter((item) => {
							return data.indexOf(item.ma) != -1;
						});

						if (this.data.userApprovers.length == 0) {
							this.data.userApprovers = [
								{
									ma: "nvt",
									ten: "Nguyễn Văn Thắng",
									anh: "./../../../assets/imgs/avatar.png",
								},
							];
							this.toastCtrl
								.create({
									message: "Người duyệt là bắt buộc",
									duration: 2000,
									position: "bottom",
									animated: true,
								})
								.then((toastApprovers) => toastApprovers.present());
						}
					},
				},
				{
					text: "Huỷ bỏ",
					handler: () => {},
					role: "cancel",
				},
			],
		});
		showApprover.present();
	}

	onDeleteManagerApprovers(viTri, ionSliding: IonItemSliding) {
		this.data.userApprovers.splice(viTri, 1);
		if (this.data.userApprovers.length == 0) {
			this.data.userApprovers = [
				{
					ma: "nvt",
					ten: "Nguyễn Văn Thắng",
					anh: "./../../../assets/imgs/avatar.png",
				},
			];
			this.toastCtrl
				.create({
					message: "Người duyệt là bắt buộc",
					duration: 2000,
					position: "bottom",
					animated: true,
				})
				.then((toastApprovers) => toastApprovers.present());
		}
		ionSliding.close();
	}
}
