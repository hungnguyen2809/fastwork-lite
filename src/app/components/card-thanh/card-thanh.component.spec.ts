import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardThanhComponent } from './card-thanh.component';

describe('CardThanhComponent', () => {
  let component: CardThanhComponent;
  let fixture: ComponentFixture<CardThanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardThanhComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardThanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
