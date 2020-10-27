import { TypeApplicationForm } from 'src/app/providers/type-application-form/type.af';
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
	titleAF: any;

	constructor(private dataServ: DataService, public formatDate: FormatDate, private typeApplicationForm: TypeApplicationForm) {}

	ngOnInit() {
		this.titleAF = this.typeApplicationForm.getDon(this.data.type).ten;
		// console.log(this.data);
	}
}
