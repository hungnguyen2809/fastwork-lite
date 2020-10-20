import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AlertController, NavController, PopoverController } from "@ionic/angular";
import { HistoryEmployeeAfComponent } from 'src/app/components/history-employee-af/history-employee-af.component';
import { DataService } from "src/app/services/data.service";

@Component({
	selector: "app-employee-application-form",
	templateUrl: "./employee-application-form.page.html",
	styleUrls: ["./employee-application-form.page.scss"],
})
export class EmployeeApplicationFormPage implements OnInit {
	titleSeeFor: { title; value };
	data: any[] = [];
	manager: boolean = false;

	constructor(
		private alertCtrl: AlertController,
		private dataService: DataService,
		private navCtrl: NavController,
		private router: Router,
		private popoverCtrl: PopoverController
	) {}

	ngOnInit() {
		this.titleSeeFor = { title: "ngày", value: "day" };
		this.dataService.getAllData().subscribe((res) => {
			this.data = res;
		});
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

	onCreateAF(loaiDon: number){
		this.navCtrl.navigateForward('create-application-form', {
			state: {
				type: loaiDon
			}
		});
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

	async onShowHistory(ev){
		const pop = await this.popoverCtrl.create({
			component: HistoryEmployeeAfComponent,
			animated: true,
			event: ev,
			cssClass: 'history-employee-af',
			mode: "md",
			id: 'pop-history-empl'
		});
		
		pop.present();
	}
}
