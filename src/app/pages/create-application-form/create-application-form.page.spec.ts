import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateApplicationFormPage } from './create-application-form.page';

describe('CreateApplicationFormPage', () => {
  let component: CreateApplicationFormPage;
  let fixture: ComponentFixture<CreateApplicationFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateApplicationFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateApplicationFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
