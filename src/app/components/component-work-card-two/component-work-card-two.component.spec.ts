import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentWorkCardTwoComponent } from './component-work-card-two.component';

describe('ComponentWorkCardTwoComponent', () => {
  let component: ComponentWorkCardTwoComponent;
  let fixture: ComponentFixture<ComponentWorkCardTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWorkCardTwoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentWorkCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
