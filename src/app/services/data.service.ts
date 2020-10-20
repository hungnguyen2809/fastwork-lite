import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApplicationForm } from './../interfaces/application-form';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: ApplicationForm[] = [];
  private donTu = [];

  // Trạng thái: 1 Đồng ý, 2 Chờ duyệt , 3 Bị từ chối
  constructor() {
    this._data = [
      {
        typeAF: 1,
        status: 1,
        user: {
          id: 'nvh',
          name: 'Nguyễn Văn Hùng',
          avatar: './../../assets/imgs/person-male.png'
        },
        createDate: 1582162200000,
        acceptDate: 1602553010482,
        contentAF: [
          {
            ngay: 1603276200000,
            caDuocPhan: {
              ma: 'hc',
              ten: 'Hành chính'
            },
            caChon: {
              ma: 'hc',
              ten: 'Hành chính'
            },
            ca: {
              ma: 'cs',
              ten: 'Ca sáng'
            },
            lyDo: {
              ma: '1',
              ten: 'Phép năm'
            },
            huongLuong: true
          },
          {
            ngay: 1603362600000,
            caDuocPhan: {
              ma: 'hc',
              ten: 'Hành chính'
            },
            caChon: {
              ma: 'hc',
              ten: 'Cả ngày'
            },
            ca: {
              ma: 'cn',
              ten: 'Cả ngày'
            },
            lyDo: {
              ma: '2',
              ten: 'Nghỉ không lương'
            },
            huongLuong: true
          },
          {
            ngay: 1603449000000,
            caDuocPhan: {
              ma: 'hc',
              ten: 'Hành chính'
            },
            caChon: {
              ma: 'hc',
              ten: 'Hành chính'
            },
            ca: {
              ma: 'cn',
              ten: 'Cả ngày'
            },
            lyDo: {
              ma: '2',
              ten: 'Nghỉ không lương'
            },
            huongLuong: false
          }
        ],
        userApprovers: [
          {
            ma: 'nvt',
            ten: 'Nguyễn Văn Thắng',
            anh: './../../../assets/imgs/avatar.png'
          },
          {
            ma: 'dqv',
            ten: 'Đặng Quang Vũ',
            anh: './../../../assets/imgs/avatar.png'
          },
        ],
        managerApprover: {
          id: 'dqv',
          name: 'Đặng Quang Vũ',
          avatar: './../../assets/imgs/avatar.png'
        },
        peopleNoti: [
          {
            id: 'ntt',
            name: 'Nguyễn Tiến Thành'
          },
          {
            id: 'nvt',
            name: 'Nguyễn Văn Tráng'
          },
          {
            id: 'nmc',
            name: 'Nguyễn Mạnh Cường'
          }
        ],
        description: '',
      },
      {
        typeAF: 4,
        status: 2,
        user: {
          id: 'nvh',
          name: 'Nguyễn Văn Hùng',
          avatar: './../../assets/imgs/person-male.png'
        },
        createDate: 1582162200000,
        acceptDate: -1,
        contentAF: [
          {
            ngay: 1603276200000,
            caDuocPhan: {
              ma : 'hc',
              ten : 'Hành chính'
            },
            caChon: {
              ma : 'hc',
              ten : 'Hành chính'
            },
            batDau: 1603276200000,
            ketThuc: 1603278000000,
            ghiChu: 'Làm bù'
          },
          {
            ngay: 1603362600000,
            caDuocPhan: {
              ma : 'hc',
              ten : 'Hành chính'
            },
            caChon: {
              ma : 'hc',
              ten : 'Hành chính'
            },
            batDau: 1603362600000,
            ketThuc: 1603364400000,
            ghiChu: 'Làm bù'
          },
        ],
        userApprovers: [
          {
            ma: 'nvt',
            ten: 'Nguyễn Văn Thắng',
            anh: './../../../assets/imgs/avatar.png'
          },
          {
            ma: 'dqv',
            ten: 'Đặng Quang Vũ',
            anh: './../../../assets/imgs/avatar.png'
          },
        ],
        managerApprover: null,
        peopleNoti: [],
        description: 'Em làm bù 2 ngày',
      },
      {
        typeAF: 3,
        status: 3,
        user: {
          id: 'nvh',
          name: 'Nguyễn Văn Hùng',
          avatar: './../../assets/imgs/person-male.png'
        },
        createDate: 1582162200000,
        acceptDate: 1602553010482,
        contentAF: [
          {
            ngay: 1603276200000,
            caDuocPhan: {
              ma : 'hc',
              ten : 'Hành chính'
            },
            caTang: {
              ma : 'cc',
              ten : 'Ca chiều'
            },
          },
          {
            ngay: 1603362600000,
            caDuocPhan: {
              ma : 'hc',
              ten : 'Hành chính'
            },
            caTang: {
              ma : 'cs',
              ten : 'Ca sáng'
            },
          },
        ],
        userApprovers: [
          {
            ma: 'nvt',
            ten: 'Nguyễn Văn Thắng',
            anh: './../../../assets/imgs/avatar.png'
          },
          {
            ma: 'dqv',
            ten: 'Đặng Quang Vũ',
            anh: './../../../assets/imgs/avatar.png'
          },
        ],
        managerApprover: {
          id: 'dqv',
          name: 'Đặng Quang Vũ',
          avatar: './../../assets/imgs/avatar.png'
        },
        peopleNoti: [],
        description: '',
      },
    ];
  }

  getAllData(): Observable<ApplicationForm[]>{
    return of(this._data);
  }

  getTitleAF(loaiDon: number){
    let tieuDeDon = '';
    if (loaiDon == 1) tieuDeDon = "Xin nghỉ phép";
		if (loaiDon == 2) tieuDeDon = "Xin vắng mặt";
		if (loaiDon == 3) tieuDeDon = "Xin tăng ca";
		if (loaiDon == 4) tieuDeDon = "Xin làm thêm";
		if (loaiDon == 5) tieuDeDon = "Xin công tác";
		if (loaiDon == 6) tieuDeDon = "Xin chế độ";
		if (loaiDon == 7) tieuDeDon = "Xin đổi ca";
    if (loaiDon == 8) tieuDeDon = "Xin giải trình chấm công";
    
    return of(tieuDeDon);
  }

  addDonTu(id:number, donTu){
    this.donTu[id] = donTu;
  }

  getDonTu(id){
    return of(this.donTu[id]);
  }

  getAllDonTu(){
    return of(this.donTu);
  }
}
