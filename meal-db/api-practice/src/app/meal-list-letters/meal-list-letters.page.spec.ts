import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealListLettersPage } from './meal-list-letters.page';

describe('MealListLettersPage', () => {
  let component: MealListLettersPage;
  let fixture: ComponentFixture<MealListLettersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealListLettersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealListLettersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
