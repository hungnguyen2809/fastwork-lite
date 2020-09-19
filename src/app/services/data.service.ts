import { Injectable } from '@angular/core';
import { ApplicationForm } from '../components/application-form/application-form.component';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: ApplicationForm[] = [];

  constructor() {
    this._data = [
      {
        name: 'Nguyễn Văn Hùng',
        avatar: './../../../assets/imgs/person-male.png',
        titleAF: 'Đơn xin nghỉ phép',
        createDate: '20/09/2020',
        time: 'Ca sáng',
        date: '21/09/2020',
        reason: 'Nghỉ không lương',
        description: '',
        state: 1,
        manager: { name: 'Đặng Quan Vũ', avatar: './../../../assets/imgs/avatar.png' },
      },
      {
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
        name: 'Nguyễn Văn Hùng',
        avatar: './../../../assets/imgs/person-male.png',
        titleAF: 'Đơn xin tăng ca',
        createDate: '20/09/2020',
        time: 'Full ca',
        date: '22/09/2020',
        reason: 'Làm có lương',
        description: 'Em làm bù vào thứ 6 tuần trước',
        state: 3,
        manager: { name: 'Đặng Quan Vũ', avatar: './../../../assets/imgs/avatar.png' },
      },
      {
        name: 'Nguyễn Văn Hùng',
        avatar: './../../../assets/imgs/person-male.png',
        titleAF: 'Đơn xin nghỉ phép',
        createDate: '20/09/2020',
        time: 'Ca sáng',
        date: '21/09/2020',
        reason: 'Nghỉ không lương',
        description: '',
        state: 1,
        manager: { name: 'Đặng Quan Vũ', avatar: './../../../assets/imgs/avatar.png' },
      },
    ];
  }

  getAllData(): Observable<ApplicationForm[]>{
    return of(this._data);
  }
}
