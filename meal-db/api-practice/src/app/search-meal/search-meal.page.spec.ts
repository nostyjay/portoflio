import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchMealPage } from './search-meal.page';

describe('SearchMealPage', () => {
  let component: SearchMealPage;
  let fixture: ComponentFixture<SearchMealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMealPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchMealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
