import { Component, OnInit } from '@angular/core';

// Import form group and form control to be able to create a form
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor() { }

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
}
