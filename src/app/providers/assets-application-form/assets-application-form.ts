import { Observer, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetApplicationForm{
  private caChon = [];
  private ca = [];
  private lyDoNghiPhep = [];
  private lyDoVangMat = [];
  private lyDoCheDo = [];
  private lyDoGiaiTrinh = [];
  private kieuDoiCa = [];
  private hoatDong = [];

  constructor(){
    this.initCaChon();
    this.initCa();
    this.initLyDoNghiPhep();
    this.initLyDoVangMat();
    this.initLyDoCheDo();
    this.initLyDoGiaiTrinh();
    this.initKieuDoiCa();
    this.initHoatDong();
  }

  private initLyDoNghiPhep(){
    this.lyDoNghiPhep = [
      {
        ma: '1',
        ten: 'Phép năm'
      },
      {
        ma: '2',
        ten: 'Nghỉ không lương'
      },
      {
        ma: '3',
        ten: 'Nghỉ thai sản'
      },
      {
        ma: '4',
        ten: 'Nghỉ kết hôn'
      },
      {
        ma: '5',
        ten: 'Nghỉ tang lễ (Bố, mẹ, con)'
      },
      {
        ma: '6',
        ten: 'Nghỉ tang lễ (Ông, bà, anh chị em ruột'
      },
    ]
  }

  private initCa(){
    this.ca = [
      {
        ma: 'cn',
        ten: 'Cả ngày'
      },
      {
        ma: 'ncd',
        ten: 'Nửa ca đầu'
      },
      {
        ma: 'ncs',
        ten: 'Nửa ca sau'
      }
    ]
  }

  private initCaChon(){
    this.caChon = [
      {
        ma: 'hc',
        ten: 'Hành chính'
      },
      {
        ma: 'cs',
        ten: 'Ca sáng'
      },
      {
        ma: 'cc',
        ten: 'Ca chiều'
      },
      {
        ma: 'nn',
        ten: 'Ngày nghỉ'
      }
    ];
  }

  private initLyDoVangMat(){
    this.lyDoVangMat = [
      {
        ma: '1',
        ten: 'Đến muộn để đi gặp khách hàng'
      },
      {
        ma: '2',
        ten: 'Về sớm để gặp khách hàng'
      },
      {
        ma: '3',
        ten: 'Bận việc gia đình'
      },
      {
        ma: '4',
        ten: 'Hỏng xe'
      },
      {
        ma: '5',
        ten: 'Tắc đường'
      },
      {
        ma: '6',
        ten: 'Đi muộn việc riêng'
      },
      {
        ma: '7',
        ten: 'Về sớm việc riêng'
      },
      {
        ma: '8',
        ten: 'Đi muộn làm hồ sơ thủ tục công ty'
      },
    ];
  }

  private initLyDoCheDo(){
    this.lyDoCheDo = [
      {
        ma: '1',
        ten: 'Nuôi con nhỏ dưới 12 tháng'
      },
      {
        ma: '2',
        ten: 'Ốm - Bệnh'
      },
      {
        ma: '3',
        ten: 'Vợ sinh'
      },
      {
        ma: '4',
        ten: 'Con ốm'
      },
      {
        ma: '5',
        ten: 'Lý do khác'
      },
    ];
  }

  private initKieuDoiCa(){
    this.kieuDoiCa = [
      {
        ma: 'cm',
        ten: 'Chính mình'
      },
      {
        ma: 'nk',
        ten: 'Người khác'
      },
    ]
  }

  private initHoatDong(){
    this.hoatDong = [
      {
        ma: '1',
        ten: 'Vào'
      },
      {
        ma: '2',
        ten : 'Ra'
      }
    ];
  }

  private initLyDoGiaiTrinh(){
    this.lyDoGiaiTrinh = [
      {
        ma: '1',
        ten: 'Quyên chấm công'
      },
      {
        ma: '2',
        ten: 'Không chấm công được'
      },
      {
        ma: '3',
        ten: 'Làm việc ở ngoài'
      },
    ];
  }

  public getAllLyDoNghiPhep(){
    return of(this.lyDoNghiPhep);
  }

  public getLyDoNghiPhep(ma){
    const lyDo = this.lyDoNghiPhep.find((item => {
      return item.ma = ma;
    }));
    return lyDo;
  }

  public getAllCa(){
    return of(this.ca);
  }

  public getCa(ma){
    const ca = this.ca.find((item) => {
      return item.ma = ma;
    })
    return ca;
  }

  public getAllCaChon(){
    return of(this.caChon);
  }
  
  public getCaChon(ma){
    const caChon = this.caChon.find((item => {
      return item.ma = ma;
    }));
    return caChon;
  }

  public getAllLyDoVangMat(){
    return of(this.lyDoVangMat);
  }

  public getLyDoVangMat(ma){
    const lyDo = this.lyDoVangMat.find((item => {
      return item.ma = ma;
    }));
    return lyDo;
  }

  public getAllLyDoCheDo(){
    return of(this.lyDoCheDo);
  }

  public getLyDoCheDo(ma){
    const lyDo = this.lyDoCheDo.find((item => {
      return item.ma = ma;
    }));
    return lyDo;
  }

  public getAllKieuDoiCa(){
    return of(this.kieuDoiCa);
  }

  public getKieuDoiCa(ma){
    const kieuDoi = this.kieuDoiCa.find((item => {
      return item.ma = ma;
    }));
    return kieuDoi;
  }

  public getAllHoatDong(){
    return of(this.hoatDong);
  }

  public getHoatDong(ma){
    const hoatDong = this.hoatDong.find((item => {
      return item.ma = ma;
    }));
    return hoatDong;
  }

  public getAllLyDoGiaiTrinh(){
    return of(this.lyDoGiaiTrinh);
  }

  public getLyDoGiaiTrinh(ma){
    const lyDo = this.lyDoGiaiTrinh.find((item => {
      return item.ma = ma;
    }));
    return lyDo;
  }

}