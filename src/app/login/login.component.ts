import { Component, OnInit } from '@angular/core';

// Import form group and form control to be able to create a form
import { FormGroup, FormControl, Validators } from '@angular/forms'

// Import RestaurantService to post to API
import { RestaurantService } from '../restaurant.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restaurants: RestaurantService) { }

  // Create a map from userId(key) and password(value)
  users = new Map();
  ngOnInit(): void {
    this.restaurants.getUserDataFromAPI().subscribe((data) => {
      Object.keys(data).forEach(key => { this.users.set(data[key].userId, data[key].password) });
    });
  }

  // Create a form to be able to get values
  loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  // Use a boolean to show alert when data is submitted.
  alert: number = 0;

  // Create a method to hide alert
  closeAlert() {
    this.alert = 0;
  }

  // Create a method to determine which alert will be shown
  updateAlert() {
    if (!this.isUserExist())
      this.alert = 1;                 // User does not exist
    else if (!this.isUserValid())
      this.alert = 2;                 // Password do not match
    else
      this.alert = 3;                 // Successfull
  }

  // Define a method to get fields from reactive form and to validate
  validateField(fieldName) {
    var field = this.loginForm.get(fieldName);
    return field.invalid && field.touched;
  }

  // Create a method to check validity of the form
  isFormValid() {
    return this.loginForm.touched && this.loginForm.valid;
  }

  // Check whether given user id is exist or not
  isUserExist() {
    return this.users.has(this.loginForm.controls['userId'].value);
  }

  // Check whether given password is corrent or not
  isUserValid() {
    return this.users.get(this.loginForm.controls['userId'].value) == this.loginForm.controls['password'].value;
  }
}
