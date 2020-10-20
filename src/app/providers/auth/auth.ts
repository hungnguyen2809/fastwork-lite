import { Injectable } from "@angular/core";
import {
	HttpClient,
	HttpParams,
	HttpHeaders,
	HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { timeoutWith } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class Authentication {
	currentUser;
	serverHost = "http://10.0.1.24:5006/";

	constructor(private http: HttpClient) {}

	// public GET(url: string) {
	//   this.currentUser = JSON.parse(localStorage.getItem('currentUser_NhanVien_FW'));
	//   //console.log("1 " + this.currentUser.token.service);

	//   //console.log("Basic " + btoa(this.currentUser.email + ":" + this.currentUser.token.service));

	//   this.headers = new Headers({
	//       'content-type': 'application/json', "Authorization": "Basic " + btoa(this.currentUser.email + ":" + this.currentUser.token.service)
	//   });
	//   this.options = new RequestOptions({ headers: this.headers });
	//   return this.http.get(this.serverHost + url, this.options).timeoutWith(30000, Observable.throw(new Error('Kiểm tra kết nối!')));
  // }
  
  // public POST(url: string, body) {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser_NhanVien_FW'));
  //   this.headers = new Headers({
  //       'content-type': 'application/json', "Authorization": "Basic " + btoa(this.currentUser.email + ":" + this.currentUser.token.service)
  //   });
  //   this.options = new RequestOptions({ headers: this.headers });
  //   return this.http.post(this.serverHost + url, body, this.options).timeoutWith(30000, Observable.throw(new Error('Kiểm tra kết nối!')))
  // }

  // //Hàm cập nhật dữ liệu
  // public PUT(url: string, body) {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser_NhanVien_FW'));
  //   this.headers = new Headers({
  //       'content-type': 'application/json', "Authorization": "Basic " + btoa(this.currentUser.email + ":" + this.currentUser.token.service)
  //   });
  //   this.options = new RequestOptions({ headers: this.headers });
  //   return this.http.put(this.serverHost + url, body, this.options).timeoutWith(30000, Observable.throw(new Error('Kiểm tra kết nối!')));
  // }

  // //Hàm xóa dữ liệu
  // public DELETE(url: string) {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser_NhanVien_FW'));
  //   this.headers = new Headers({
  //       'content-type': 'application/json', "Authorization": "Basic " + btoa(this.currentUser.email + ":" + this.currentUser.token.service)
  //   });
  //   this.options = new RequestOptions({ headers: this.headers });
  //   return this.http.delete(this.serverHost + url, this.options).timeoutWith(30000, Observable.throw(new Error('Kiểm tra kết nối!')));
  // }

	private getOptions() {
		let options: {
			headers?: HttpHeaders | { [header: string]: string | string[] };
			observe?: "body" | "events" | "response";
			params?: HttpParams | { [param: string]: string | string[] };
			reportProgress?: boolean;
			responseType?: "arraybuffer" | "blob" | "json" | "text";
			withCredentials?: boolean;
    };

    // this.currentUser = 
    
		let headers = new HttpHeaders().set(
			"Authorization",`Basic ${btoa(this.currentUser.email + ":" + this.currentUser.token.service)}`
		);
		// let headers = new HttpHeaders({
		//   "Content-Type": "application/json; charset=UTF-8",
		//   "Authorization": `Basic ${btoa(currentUser.email + ":" + currentUser.token.service)}`
		// });

		return (options = {
			headers: headers,
			responseType: "json",
		});
	}

	public GET(url: string) {
		return this.http
			.get(this.serverHost + url, this.getOptions())
			.pipe(timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !"))));
	}

	public POST(url: string, body: any) {
		return this.http
			.post(this.serverHost + url, JSON.stringify(body), this.getOptions())
			.pipe(timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !"))));
	}

	public PUST(url: string, body: any) {
		return this.http
			.put(this.serverHost + url, JSON.stringify(body), this.getOptions())
			.pipe(timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !"))));
  }
  
  public DELETE(url: string){
    return this.http.put(this.serverHost + url, this.getOptions()).pipe(
      timeoutWith(30000, throwError(new Error("Kiểm tra kết nối !")))
    );
  }
}
