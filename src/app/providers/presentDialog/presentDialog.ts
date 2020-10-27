import { Injectable } from "@angular/core";
import {
	AlertController,
	LoadingController,
	ToastController,
} from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class PresentDialog {
	constructor(
		private alertCtrl: AlertController,
		private toastCtrl: ToastController,
		private loadingCtrl: LoadingController
	) {}

	async presentToast(message: string) {
		const toast = await this.toastCtrl.create({
			message: message,
			animated: true,
			duration: 2000,
			position: "bottom",
		});
		toast.present();
	}

	async presentLoadding(message: string, callBack?) {
		const loadding = await this.loadingCtrl.create({
			message: message,
			spinner: "circles",
			animated: true,
			backdropDismiss: false,
			keyboardClose: true,
    });
    loadding.present();

		setTimeout(() => {
			if (typeof callBack == "function") {
				callBack(loadding)
			}
			// loadding.dismiss();
		}, 1500);
	}

	async presentAlertAcceptCancel(message: string, callBack?) {
		const alert = await this.alertCtrl.create({
			message: message,
			animated: true,
			backdropDismiss: false,
			buttons: [
				{
					text: "Đồng ý",
					handler: () => {
						if (typeof callBack == "function") {
							callBack();
						}
					},
				},
				{
					text: "Hủy bỏ",
					handler: () => {},
					role: "cancel",
				},
			],
    });
    alert.present();
	}
	
	async presentAlertMessage(message: string, callBack?) {
		const alert = await this.alertCtrl.create({
			message: message,
			animated: true,
			backdropDismiss: false,
			buttons: [
				{
					text: "OK",
					handler: () => {
						if (typeof callBack == "function") {
							callBack();
						}
					},
				},
				// {
				// 	text: "Hủy bỏ",
				// 	handler: () => {},
				// 	role: "cancel",
				// },
			],
    });
    alert.present();
	}
}
