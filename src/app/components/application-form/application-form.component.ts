import { Component, Input, OnInit } from "@angular/core";
import { FormatDate } from "src/app/providers/format-date/format-date";
import { DataService } from "src/app/services/data.service";

@Component({
	selector: "application-form",
	templateUrl: "./application-form.component.html",
	styleUrls: ["./application-form.component.scss"],
})
export class ApplicationFormComponent implements OnInit {
	@Input("manager") isManager: boolean = false;
	@Input("data") data: any = null;
	@Input("showDescription") showDesc: boolean = false;
	titleAF: string = "";

	constructor(private dataServ: DataService, public formatDate: FormatDate) {}

	ngOnInit() {
		this.dataServ.getTitleAF(this.data.typeAF).subscribe((title) => {
			this.titleAF = title;
		});
	}
}
