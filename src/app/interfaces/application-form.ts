export interface ApplicationForm{
  typeAF: number;
  status: number;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  createDate: any;
  acceptDate: any;
  contentAF: any[];
  userApprovers: any[];
  managerApprover: any;
  peopleNoti: any[];
  description: string;
}

// 1
export class NghiPhep{
  ngay: any;
  caDuocPhan: any;
  caChon: any;
  ca: any;
  lyDo: any;
  huongLuong: boolean;
}

// 2
export class VangMat{
  ngay: any;
  caDuocPhan: any;
  caChon: any;
  batDau: any;
  ketThuc: any;
  lyDo: any;
  tinhCong: boolean;
  phatTien: boolean;
  yeuCauChot: boolean;
}

// 3
export class TangCa{
  ngay: any;
  caDuocPhan: any;
  caTang: any;
}

// 4
export class LamThem{
  ngay: any;
  caDuocPhan: any;
  caChon: any;
  batDau: any;
  ketThuc: any;
  ghiChu: string;
}

// 5
export class CongTac{
  ngay: any;
  caDuocPhan: any;
  caChon: any;
  batDau: any;
  ketThuc: any;
  diaDiem: any;
}

// 6
export class CheDo{
  tuNgay: any;
  denNgay: any;
  diMuon: any;
  veSom: any;
  lyDo: any;
}

// 7
export class DoiCa{
  kieuDoi: any;
  ngayCanDoi: any;
  caCanDoi: any;
  nguoiDoi: any;
  ngayDoi: any;
  caLam: any;
}

// 8
export class GiaiTrinh{
  ngay: any;
  gio: any;
  caDuocPhan: any;
  caChon: any;
  hoatDong: any;
  lyDo: any;
}