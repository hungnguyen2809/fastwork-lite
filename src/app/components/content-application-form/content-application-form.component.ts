import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'content-application-form',
  templateUrl: './content-application-form.component.html',
  styleUrls: ['./content-application-form.component.scss'],
})
export class ContentApplicationFormComponent implements OnInit {
  @Input('loaiDon') loaiDon: number;
  @Input('data') data: any;
  @Input('showDescription') showDesc: boolean = false;

  constructor() { }

  ngOnInit() {}

}
