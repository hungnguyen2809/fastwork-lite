import { Component, OnInit } from '@angular/core';
import { ApplicationForm } from 'src/app/components/application-form/application-form.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-manager-application-form',
  templateUrl: './manager-application-form.page.html',
  styleUrls: ['./manager-application-form.page.scss'],
})
export class ManagerApplicationFormPage implements OnInit {
  data: ApplicationForm[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllData().subscribe(res => {
      this.data = res;
    })
  }
}
