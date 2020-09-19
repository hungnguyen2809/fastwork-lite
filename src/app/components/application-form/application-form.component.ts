import { Component, Input, OnInit } from "@angular/core";

export interface ApplicationForm{
	name: string;
	avatar: string;
	titleAF: string;
	createDate: string;
	time: string;
	date: string;
	reason: string;
	description: string;
	state: number;
	manager: {name: string, avatar: string}
}

@Component({
	selector: "application-form",
	templateUrl: "./application-form.component.html",
	styleUrls: ["./application-form.component.scss"],
})

export class ApplicationFormComponent implements OnInit {
	@Input("manager") isManager: boolean = false;
	@Input("data") data: ApplicationForm = null;

	constructor() {}

	ngOnInit() {
	}
}
