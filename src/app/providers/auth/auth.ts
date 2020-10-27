import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { timeoutWith } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";
import { DataUserService } from "src/app/services/data-user.service";

@Injectable({
	providedIn: "root",
})
export class Authentication {
	constructor(private http: HttpClient, private user: DataUserService) {}

	private getOptions(params?: HttpParams) {
		let options: {
			headers?: HttpHeaders | { [header: string]: string | string[] };
			observe?: "body" | "events" | "response";
			params?: HttpParams | { [param: string]: string | string[] };
			reportProgress?: boolean;
			responseType?: "arraybuffer" | "blob" | "json" | "text";
			withCredentials?: boolean;
		};

		return this.user.getCurrentUser().then((currentUser) => {
			let headers = new HttpHeaders({
				"Content-Type": "application/json",
				"Authorization": 
					`Basic ${btoa(currentUser.email + ":" + currentUser.token.service)}`,
			});

			options = {
				headers: headers,
				responseType: "json",
				params: params ? params : null,
			};

			return new Promise((resolve) => {
				resolve(options);
			});
		});
	}

	public GET(url: string) {
		return this.getOptions().then((options) => {
			return this.http
				.get(environment.SERVER_NAME + url, options)
				.pipe(timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !"))))
				.toPromise();
		});
	}

	public POST(url: string, body: any) {
		return this.getOptions().then((options) => {
			return this.http
				.post(environment.SERVER_NAME + url, JSON.stringify(body), options)
				.pipe(timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !"))))
				.toPromise();
		});
	}

	public PUT(url: string, body: any) {
		return this.getOptions().then((options) => {
			return this.http
				.put(environment.SERVER_NAME + url, JSON.stringify(body), options)
				.pipe(timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !"))))
				.toPromise();
		});
	}

	public DELETE(url: string) {
		return this.getOptions().then((options) => {
			return this.http
				.delete(environment.SERVER_NAME + url, options)
				.pipe(timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !"))))
				.toPromise();
		});
	}

	//Lấy dữ liệu với param truyền vào
	public GET2(url: string, params: any) {
		let httpParams = new HttpParams();
		for (let key in params) {
			httpParams = httpParams.set(key, params[key]);
		}
		return this.getOptions(httpParams).then((options) => {
			// console.log(options);
			return this.http
				.get(environment.SERVER_NAME + url, options)
				.pipe(timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !"))))
				.toPromise();
		});
	}
}
