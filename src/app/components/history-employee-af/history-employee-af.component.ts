import { Component, OnInit } from "@angular/core";
import { NavController, PopoverController } from "@ionic/angular";
import { PresentDialog } from "src/app/providers/presentDialog/presentDialog";
import { DataUserService } from "src/app/services/data-user.service";

@Component({
	selector: "app-history-employee-af",
	templateUrl: "./history-employee-af.component.html",
	styleUrls: ["./history-employee-af.component.scss"],
})
export class HistoryEmployeeAfComponent implements OnInit {
	constructor(
		private popoverCtrl: PopoverController,
		private navCtrl: NavController,
		private authUser: DataUserService,
		private presentDialog: PresentDialog
	) {}

	ngOnInit() {}

	onHistory() {
		this.popoverCtrl.dismiss(null, null, "pop-history-empl");
		this.navCtrl.navigateForward("filter-application-form", {
			state: {
				duLieu: {
					manager: false,
					loaiDon: null,
				},
			},
		});
	}

	onLogout() {
		this.popoverCtrl.dismiss(null, null, "pop-history-empl");
		this.authUser.clearCurrentUser().then(() => {
			this.presentDialog.presentAlertAcceptCancel(
				"Bạn có chắc muốn đăng xuất ?",
				() => {
					this.presentDialog.presentLoadding("Đang đăng xuất", (loading) => {
						this.navCtrl.navigateRoot("login").then(() => {
							this.presentDialog
								.presentToast("Đăng xuất thành công !")
								.then(() => {
									loading.dismiss();
								});
						});
					});
				}
			);
		});
	}
}
