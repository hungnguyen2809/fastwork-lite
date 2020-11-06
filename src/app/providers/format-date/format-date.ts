import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class FormatDate {
	constructor() {}

	public formatDate(time = Date.now()) {
		if (typeof time == "string") {
			return time;
		}
		if (time > -1) {
			const date = new Date(time);
			return `${this.addNumberZero(date.getDate())}/${this.addNumberZero(
				date.getMonth() + 1
			)}/${date.getFullYear()}`;
		}
		return null;
	}

	public formatTime(time = Date.now()) {
		if (typeof time == "string") {
			return time;
		}
		if (time > -1) {
			const date = new Date(time);
			return `${this.addNumberZero(date.getHours())}:${this.addNumberZero(
				date.getMinutes()
			)}`;
		}
		return null;
	}

	private addNumberZero(number: number) {
		if (String(number).length == 1) {
			return `0${number}`;
		}
		return number;
	}

	public getDateIonDateTime(ionDate) {
		return ionDate.split("T")[0].split("-").reverse().join("/");
	}

	public getTimeIonDateTime(ionDate) {
		return ionDate.split("T")[1].split(".")[0];
	}
}
