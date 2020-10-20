import { Component, Input, OnInit } from '@angular/core';
import { FormatDate } from 'src/app/providers/format-date/format-date';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'content-application-form',
  templateUrl: './content-application-form.component.html',
  styleUrls: ['./content-application-form.component.scss'],
})
export class ContentApplicationFormComponent implements OnInit {
  @Input('loaiDon') loaiDon: number;
  @Input('data') data: any;
  @Input('showDescription') showDesc: boolean = false;

  constructor(public formatDate: FormatDate, private dataServ: DataService) { }

  ngOnInit() {
    console.log(this.data);
  }

}
