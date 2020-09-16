import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsApplicationFormPage } from './details-application-form.page';

describe('DetailsApplicationFormPage', () => {
  let component: DetailsApplicationFormPage;
  let fixture: ComponentFixture<DetailsApplicationFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsApplicationFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsApplicationFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
