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
        sub: 'Nghỉ phép',
        img: './../../../assets/icon/nghi-phep.png'
      },
      {
        id: 2,
        ma: 'later',
        ten: 'Xin vắng mặt',
        sub: 'Vắng mặt',
        img: './../../../assets/icon/vang-mat.png'
      },
      {
        id: 3,
        ma: 'shiftmore',
        ten: 'Xin tăng ca',
        sub: 'Tăng ca',
        img: './../../../assets/icon/tang-ca.png'
      },
      {
        id: 4,
        ma: 'overtime',
        ten: 'Xin làm thêm',
        sub: 'Làm thêm',
        img: './../../../assets/icon/lam-them.png'
      },
      {
        id: 5,
        ma: 'misson',
        ten: 'Xin công tác',
        sub: 'Công tác',
        img: './../../../assets/icon/cong-tac.png'
      },
      {
        id: 6,
        ma: 'worktime',
        ten: 'Xin chế độ',
        sub: 'Chế độ',
        img: './../../../assets/icon/nghi-che-do.png'
      },
      {
        id: 7,
        ma: 'shiftchange',
        ten: 'Xin đổi ca',
        sub: 'Đổi ca',
        img: './../../../assets/icon/doi-ca.png'
      },
      {
        id: 8,
        ma: 'checkin',
        ten: 'Xin giải trình',
        sub: 'Giải trình',
        img: './../../../assets/icon/giai-trinh-cham-cong.png'
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