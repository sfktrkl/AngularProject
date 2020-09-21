import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurantComponent } from './list-restaurant.component';

// Import http client testing module to fix provider errors
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListRestaurantComponent', () => {
  let component: ListRestaurantComponent;
  let fixture: ComponentFixture<ListRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestaurantComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
