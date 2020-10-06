import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TempCreateApplicationFormComponent } from './temp-create-application-form.component';

describe('TempCreateApplicationFormComponent', () => {
  let component: TempCreateApplicationFormComponent;
  let fixture: ComponentFixture<TempCreateApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCreateApplicationFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TempCreateApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
