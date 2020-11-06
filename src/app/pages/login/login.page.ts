import { PresentDialog } from "src/app/providers/presentDialog/presentDialog";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AuthLogin } from "src/app/providers/login/login";
import { DataUserService } from "src/app/services/data-user.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
	user: { email: string; password: string } = { email: "", password: "" };

	constructor(
		private authUser: DataUserService,
		private authLogin: AuthLogin,
		private nav: NavController,
		private presentDialog: PresentDialog
	) {}

	ngOnInit() {		
		this.authUser.getInforUser().then((user: any) => {
			if (user) {
				this.user = user;
				// console.log(res);
				this.authLogin.checkExistsUser().then((existsUser: boolean) => {
					if(existsUser){
						this.onLogin();
					}
				});
			}
		});
	}

	onLogin() {
		if (this.user.email.length > 0 && this.user.password.length > 0) {
			this.presentDialog.presentLoadding("Đang đang nhập", (loading: any) => {
				this.authLogin.login(this.user.email, this.user.password).subscribe(
					(response: any) => {
						const data = response.result;
						if (data != null) {
							this.authUser.setCurrentUser(data).then(() => {
								const userPass = {
									email: this.user.email,
									password: this.user.password,
								};
								this.authUser.setInforUser(userPass);
								this.authUser.setOrgUser(response.org[0]).then((org) => {
									let permission = data.settings[org._id];
									// console.log(permission);

									//dismiss laoding controller
									loading.dismiss();

									if(permission.position != "Nhân viên"){
										this.nav.navigateRoot("manager-application-form");
									}
									else{
										this.nav.navigateRoot("employee-application-form");
									}
								});
							});
							// console.log(response);
						} else {
							this.presentDialog.presentToast(response.message);
						}
					},
					(error: HttpErrorResponse) => {
						this.presentDialog.presentAlertMessage("Kiểm tra kết nối ! Máy chủ không phản hồi");
						loading.dismiss();
						console.log(error);
					}
				);
			});
		} else {
			alert("Chưa nhập thông tin !");
		}
	}

	onRoutePage(){

	}
}
