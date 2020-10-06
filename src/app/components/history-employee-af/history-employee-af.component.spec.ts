import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryEmployeeAfComponent } from './history-employee-af.component';

describe('HistoryEmployeeAfComponent', () => {
  let component: HistoryEmployeeAfComponent;
  let fixture: ComponentFixture<HistoryEmployeeAfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryEmployeeAfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryEmployeeAfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
