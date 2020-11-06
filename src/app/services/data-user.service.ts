import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class DataUserService {
	private KEY_CRRENTUSER = "CurrentUser";
	private KEY_INFORUSER = "INFORUSER";
	private KEY_ORG = "Organization";

	constructor(private storage: Storage) {}

	setCurrentUser(data: any) {
		return this.storage.set(this.KEY_CRRENTUSER, data);
	}

	getCurrentUser() {
		return this.storage.get(this.KEY_CRRENTUSER);
	}

	clearCurrentUser() {
		return this.storage.remove(this.KEY_CRRENTUSER);
	}

	setInforUser(data: any) {
		return this.storage.set(this.KEY_INFORUSER, data);
	}

	getInforUser() {
		return this.storage.get(this.KEY_INFORUSER);
	}

	clearInforUser() {
		return this.storage.remove(this.KEY_INFORUSER);
	}

	setOrgUser(data: any) {
		return this.storage.set(this.KEY_ORG, data);
	}

	getOrgUser() {
		return this.storage.get(this.KEY_ORG);
	}

	clearOrgUser() {
		return this.storage.remove(this.KEY_ORG);
	}
}
