import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import {
	CheDo,
	CongTac,
	DoiCa,
	GiaiTrinh,
	LamThem,
	NghiPhep,
	TangCa,
	VangMat,
} from "src/app/interfaces/application-form";
import { AssetApplicationForm } from "src/app/providers/assets-application-form/assets-application-form";
import { FormatDate } from 'src/app/providers/format-date/format-date';

@Component({
	selector: "app-temp-create-application-form",
	templateUrl: "./temp-create-application-form.component.html",
	styleUrls: ["./temp-create-application-form.component.scss"],
})
export class TempCreateApplicationFormComponent implements OnInit {
	loaiDon: number;
	edit: boolean;
	thongTin: any;

	duLieuDon: any;

	caChon = [];
	ca = [];
	lyDoNghiPhep = [];
	lyDoVangMat = [];
	lyDoCheDo = [];
	lyDoGiaiTrinh = [];
	kieuDoiCa = [];
	hoatDong = [];

	constructor(
		private modalCtrl: ModalController,
		private navParams: NavParams,
    private assetAf: AssetApplicationForm,
    private formatDate: FormatDate
	) {
		this.getParamsData();
	}

	ngOnInit() {
		this.initDataAssetAf(this.loaiDon);
		this.initDataDonTu(this.loaiDon);
	}

	getParamsData() {
		if (this.navParams.get("data")) {
			this.loaiDon = this.navParams.get("data").loaiDon;
			this.edit = this.navParams.get("data").edit;

			if (this.navParams.get("data").thongTin != null) {
				this.thongTin = this.navParams.get("data").thongTin;
			}
		}
	}

	initDataDonTu(loaiDon: number) {
		if (loaiDon == 1){
			this.duLieuDon = new NghiPhep();
			this.duLieuDon.ngay = this.formatDate.formatDate();
			this.duLieuDon.caChon = this.caChon[0].ma;
			this.duLieuDon.ca = this.ca[0].ma;
			this.duLieuDon.lyDo = this.lyDoNghiPhep[0].ma;
		}
		if (loaiDon == 2) {
			this.duLieuDon = new VangMat();
			this.duLieuDon.ngay = this.formatDate.formatDate();
			this.duLieuDon.batDau = "08:00";
			this.duLieuDon.ketThuc = "17:00"
			this.duLieuDon.caChon = this.caChon[0].ma;
			this.duLieuDon.lyDo = this.lyDoVangMat[0].ma;
		}
		if (loaiDon == 3) this.duLieuDon = new TangCa();
		if (loaiDon == 4) this.duLieuDon = new LamThem();
		if (loaiDon == 5) this.duLieuDon = new CongTac();
		if (loaiDon == 6) this.duLieuDon = new CheDo();
		if (loaiDon == 7) this.duLieuDon = new DoiCa();
		if (loaiDon == 8) this.duLieuDon = new GiaiTrinh();
	}

	initDataAssetAf(loaiDon: number) {
    this.assetAf.getAllCaChon()
      .subscribe((caChon) => (this.caChon = caChon));

    if(loaiDon == 1){
      this.assetAf.getAllCa()
        .subscribe((ca) => (this.ca = ca));

      this.assetAf.getAllLyDoNghiPhep()
        .subscribe((lyDo) => (this.lyDoNghiPhep = lyDo));
    }

    if(loaiDon == 2){
      this.assetAf.getAllCaChon()
        .subscribe((caChon) => (this.caChon = caChon));
      this.assetAf.getAllLyDoVangMat()
        .subscribe((lyDo) => (this.lyDoVangMat = lyDo));
    }

    if(loaiDon == 6){
      this.assetAf.getAllLyDoCheDo()
        .subscribe((lyDo) => (this.lyDoCheDo = lyDo));
    }

    if(loaiDon == 7){
      this.assetAf
        .getAllKieuDoiCa()
        .subscribe((kieuDoi) => (this.kieuDoiCa = kieuDoi));
    }

    if(loaiDon == 8){
      this.assetAf.getAllHoatDong()
        .subscribe((hoatDong) => (this.hoatDong = hoatDong));
      this.assetAf.getAllLyDoGiaiTrinh()
        .subscribe((lyDo) => (this.lyDoGiaiTrinh = lyDo));
    }

	}

	onSubmit() {
    if(this.loaiDon == 1){
      this.duLieuDon.ngay = this.formatDate
                          .getDateIonDateTime(this.duLieuDon.ngay);
      this.duLieuDon.caDuocPhan = 'Hành chính';
      this.duLieuDon.caChon = this.assetAf.getCaChon(this.duLieuDon.caChon);
      this.duLieuDon.ca = this.assetAf.getCa(this.duLieuDon.ca);
      this.duLieuDon.lyDo = this.assetAf.getLyDoNghiPhep(this.duLieuDon.lyDo);
      this.duLieuDon.huongLuong = true;
    }
    this.modalCtrl.dismiss(this.duLieuDon, null, "modal-create-af");
	}

	onClose(){
		this.modalCtrl.dismiss(null, null, "modal-create-af");
		this.duLieuDon = [];
	}
}
