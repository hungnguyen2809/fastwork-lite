import { TypeApplicationForm } from 'src/app/providers/type-application-form/type.af';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
	AlertController,
	NavController,
	PopoverController,
} from "@ionic/angular";
import { HistoryEmployeeAfComponent } from "src/app/components/history-employee-af/history-employee-af.component";
import { Authentication } from "src/app/providers/auth/auth";
import { AuthLogin } from "src/app/providers/login/login";
import { PresentDialog } from "src/app/providers/presentDialog/presentDialog";
import { DataUserService } from "src/app/services/data-user.service";
import { DataService } from "src/app/services/data.service";

@Component({
	selector: "app-employee-application-form",
	templateUrl: "./employee-application-form.page.html",
	styleUrls: ["./employee-application-form.page.scss"],
})
export class EmployeeApplicationFormPage implements OnInit {
	titleSeeFor: { title; value };
	dataDon: any[] = [];
	manager: boolean = false;
	org: any;
	
	ngayNghiPhep: any;

	loaiDons: any;

	constructor(
		private alertCtrl: AlertController,
		private dataService: DataService,
		private navCtrl: NavController,
		private router: Router,
		private popoverCtrl: PopoverController,
		private authLogin: AuthLogin,
		private authUser: DataUserService,
		private presentDialog: PresentDialog,
		private auth: Authentication,
		private typeApplicationForm : TypeApplicationForm
	) {}

	ngOnInit() {
		this.titleSeeFor = { title: "ngày", value: "day" };
		this.loaiDons = this.typeApplicationForm.getAllDon();
		this.ngayNghiPhep = {
			con_thuc_te: 0,
			nghi_thuc_te: 0,
			tong_phep: 0
		}

		this.authLogin.checkExistsUser().then((existsUser: boolean) => {
			if (existsUser) {
				this.getDataAF();
				this.authUser.getOrgUser().then((orgUser) => {
					this.org = orgUser;
					// console.log(res);
				});
			}
		});
	}

	getDataAF() {
		this.presentDialog.presentLoadding("Đang tải dữ liệu !", (loading) => {
			this.authUser.getInforUser().then((user) => {
				const params = {
					next: 10,
					skip: 0,
					createdBy: user.email,
				};
				// console.log(params);

				this.authUser.getOrgUser().then((org) => {
					const url = "hrmletter/summary/" + org._id;
					this.auth
						.GET2(url, params)
						.then((res: any) => {
							loading.dismiss();
							// console.log(res);
							let data = res.result;
							this.dataDon = data;
							// console.log(data);
							return this.auth.GET(`hrmfurlough/member/${org._id}`);
						})
						.then((ngayNghi: any) => {
							// console.log(ngayNghi.result);
							this.ngayNghiPhep = ngayNghi.result;
						})
						.catch(() => {
							loading.dismiss();
							this.presentDialog.presentAlertMessage("Vui lòng thử lại !");
						});
				});
			});
		});
	}

	onShowMoreNgayNghi(){
		this.presentDialog.presentAlertMessage(
			`Tổng ngày nghỉ: ${this.ngayNghiPhep.tong_phep}, Đã nghỉ: ${this.ngayNghiPhep.nghi_thuc_te}, Còn lại: ${this.ngayNghiPhep.con_thuc_te}`
		);
	}

	async onSeeByDayWeekMonth() {
		const alertFind = await this.alertCtrl.create({
			subHeader: "Xem theo",
			keyboardClose: true,
			animated: true,
			translucent: true,
			cssClass: "alert-see-application-form-employee",
			inputs: [
				{
					type: "radio",
					value: "day",
					label: "Ngày",
					handler: () => {
						this.titleSeeFor.title = "ngày";
						this.titleSeeFor.value = "day";
						alertFind.dismiss();
					},
					checked: this.titleSeeFor.value === "day",
				},
				{
					type: "radio",
					value: "week",
					label: "Tuần",
					handler: () => {
						this.titleSeeFor.title = "tuần";
						this.titleSeeFor.value = "week";
						alertFind.dismiss();
					},
					checked: this.titleSeeFor.value === "week",
				},
				{
					type: "radio",
					value: "month",
					label: "Tháng",
					handler: () => {
						this.titleSeeFor.title = "tháng";
						this.titleSeeFor.value = "month";
						alertFind.dismiss();
					},
					checked: this.titleSeeFor.value === "month",
				},
			],
		});
		alertFind.present();
	}

	onCreateAF(maloaiDon) {
		this.navCtrl.navigateForward("create-application-form", {
			state: {
				maLoaiDon: maloaiDon,
				ngayNghiPhep: this.ngayNghiPhep
			},
		});
	}

	onDetailsAF(manager, data) {
		this.navCtrl.navigateForward("details-application-form", {
			state: {
				dulieu: {
					manager: manager,
					data: data,
				},
			},
		});
	}

	async onShowHistory(ev) {
		const pop = await this.popoverCtrl.create({
			component: HistoryEmployeeAfComponent,
			animated: true,
			event: ev,
			cssClass: "history-employee-af",
			mode: "md",
			id: "pop-history-empl",
		});

		pop.present();
	}
}
