import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentWorkCardOneComponent } from './component-work-card-one.component';

describe('ComponentWorkCardOneComponent', () => {
  let component: ComponentWorkCardOneComponent;
  let fixture: ComponentFixture<ComponentWorkCardOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWorkCardOneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentWorkCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
