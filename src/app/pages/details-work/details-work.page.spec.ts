import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsWorkPage } from './details-work.page';

describe('DetailsWorkPage', () => {
  let component: DetailsWorkPage;
  let fixture: ComponentFixture<DetailsWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
