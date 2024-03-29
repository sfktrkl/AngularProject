import { Component, OnInit } from '@angular/core';

// Import form group and form control to be able to create a form
import { FormGroup, FormControl } from '@angular/forms'

// Import RestaurantService to post to API
import { RestaurantService } from '../restaurant.service'

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor(private restaurants: RestaurantService) { }

  ngOnInit(): void {
  }

  // Create a form to be able to get values
  restaurantForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });

  // Create a method to be able to get values from form
  getFormValues() { console.warn(this.restaurantForm.value); }

  // Create a method to post data to API using service
  sendFormValues() { this.restaurants.setDataToAPI(this.restaurantForm.value).subscribe(); }

  // Use a boolean to show alert when data is submitted.
  alert: boolean = false;

  // Create a method to show/hide alert
  updateAlert(isShown) { this.alert = isShown; }

  // Create a method to reset form
  resetForm() { this.restaurantForm.reset(); }
}
