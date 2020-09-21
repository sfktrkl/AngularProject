import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantComponent } from './add-restaurant.component';

// Import http client testing module to fix provider errors
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddRestaurantComponent', () => {
  let component: AddRestaurantComponent;
  let fixture: ComponentFixture<AddRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestaurantComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
