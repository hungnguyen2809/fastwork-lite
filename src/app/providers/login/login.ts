import { PresentDialog } from 'src/app/providers/presentDialog/presentDialog';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { timeoutWith } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";
import { DataUserService } from 'src/app/services/data-user.service';
import { NavController } from '@ionic/angular';
declare let JSEncrypt: any;

@Injectable({
	providedIn: "root",
})
export class AuthLogin {
	serverHost = "http://10.0.1.24:5006/";
	encrypt;
	constructor(private http: HttpClient,
		private authUser: DataUserService,
		private presentDialog: PresentDialog,
		private navCtrl: NavController
		) {
		this.encrypt = new JSEncrypt();
		this.encrypt.setKey(
			"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDXo1PfkTSNPKFTb1bl3JromFEaWHKw1s2UJJCHIUM+9HjeHkYJmafmQu8d4uW8gKYzd7zvz+Lt4CFcfhr92Fz1+tIwaSJ0cNFODrWqrKrVsHaePpvkEYkIkhGWAFl0ZGa76GPopKXC3nw6jP+rCUnIkg6mn3+cpLDsigkxlE8bOwIDAQAB"
		);
	}

	login(email: string, password: string) {
		const url = environment.SERVER_NAME + "Users/MobileLogin";
		const body = {
			email: this.encrypt.encrypt(email),
			password: this.encrypt.encrypt(password),
		};

		let headers = new HttpHeaders({ "Content-Type": "application/json" });

		return this.http
			.post(url, JSON.stringify(body), {
				responseType: "json",
				headers: headers,
			})
			.pipe(timeoutWith(30000, throwError(new Error("Quá thời gian"))));
	}

	checkExistsUser() {
		return this.authUser.getCurrentUser().then((data) => {
			if (!data) {
				this.navCtrl.navigateRoot("login");
				return new Promise((resolve) =>{
					resolve(null);
				})
			}
			else {
				if(data.chuc_vu == null){
					return new Promise((resolve) =>{
						resolve(false);
					});
				}
				else{
					return new Promise((resolve) =>{
						resolve(false);
					});
				}
			}
		});
	}
}
