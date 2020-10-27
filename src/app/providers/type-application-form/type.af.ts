import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TypeApplicationForm{
  dons = []
  constructor() {
    this.initDon();
  }

  initDon(){
    this.dons = [
      {
        id: 1,
        ma: 'absence',
        ten: 'Xin nghỉ phép',
        sub: 'Nghỉ phép'
      },
      {
        id: 2,
        ma: 'later',
        ten: 'Xin vắng mặt',
        sub: 'Vắng mặt'
      },
      {
        id: 3,
        ma: 'shiftmore',
        ten: 'Xin tăng ca',
        sub: 'Tăng ca'
      },
      {
        id: 4,
        ma: 'overtime',
        ten: 'Xin làm thêm',
        sub: 'Làm thêm'
      },
      {
        id: 5,
        ma: 'misson',
        ten: 'Xin công tác',
        sub: 'Công tác'
      },
      {
        id: 6,
        ma: 'worktime',
        ten: 'Xin chế độ',
        sub: 'Chế độ'
      },
      {
        id: 7,
        ma: 'shiftchange',
        ten: 'Xin đổi ca',
        sub: 'Đổi ca'
      },
      {
        id: 8,
        ma: 'checkin',
        ten: 'Xin giải trình',
        sub: 'Giải trình'
      },
    ];
  }

  getAllDon(){
    return this.dons;
  }

  getDon(ma: string){
    return this.dons.find(item => { return  item.ma == ma });
  }

}