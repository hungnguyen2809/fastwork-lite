import { Injectable } from '@angular/core';
import { ApplicationForm } from '../components/application-form/application-form.component';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: ApplicationForm[] = [];
  private titleApplicationForms = [];
  private donTu = [];

  constructor() {
    this._data = [
      {
        typeAF: 1,
        name: 'Nguyễn Văn Hùng',
        avatar: './../../../assets/imgs/person-male.png',
        titleAF: 'Đơn xin nghỉ phép',
        createDate: '20/09/2020',
        time: 'Ca sáng',
        date: '21/09/2020',
        reason: 'Nghỉ không lương',
        description: '',
        state: 1,
        manager: { name: 'Đặng Quang Vũ', avatar: './../../../assets/imgs/avatar.png' },
      },
      {
        typeAF: 2,
        name: 'Nguyễn Văn Hùng',
        avatar: './../../../assets/imgs/person-male.png',
        titleAF: 'Đơn xin vắng mặt',
        createDate: '20/09/2020',
        time: 'Ca sáng 08:00 - 10:00',
        date: '21/09/2020',
        reason: 'Xe hỏng',
        description: 'Xe em bị hỏng',
        state: 2,
        manager: null,
      },
      {
        typeAF: 3,
        name: 'Nguyễn Văn Hùng',
        avatar: './../../../assets/imgs/person-male.png',
        titleAF: 'Đơn xin tăng ca',
        createDate: '20/09/2020',
        time: 'Full ca',
        date: '22/09/2020',
        reason: 'Làm có lương',
        description: 'Em làm bù vào thứ 6 tuần trước',
        state: 3,
        manager: { name: 'Đặng Quang Vũ', avatar: './../../../assets/imgs/avatar.png' },
      },
      {
        typeAF: 1,
        name: 'Nguyễn Văn Hùng',
        avatar: './../../../assets/imgs/person-male.png',
        titleAF: 'Đơn xin nghỉ phép',
        createDate: '20/09/2020',
        time: 'Ca sáng',
        date: '21/09/2020',
        reason: 'Nghỉ không lương',
        description: '',
        state: 1,
        manager: { name: 'Đặng Quang Vũ', avatar: './../../../assets/imgs/avatar.png' },
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
