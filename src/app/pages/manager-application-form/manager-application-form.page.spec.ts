import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerApplicationFormPage } from './manager-application-form.page';

describe('ManagerApplicationFormPage', () => {
  let component: ManagerApplicationFormPage;
  let fixture: ComponentFixture<ManagerApplicationFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerApplicationFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerApplicationFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
