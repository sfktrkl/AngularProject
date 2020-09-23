import { Component, OnInit } from '@angular/core';

// Import form group and form control to be able to create a form
import { FormGroup, FormControl, Validators } from '@angular/forms'

// Import RestaurantService to post to API
import { RestaurantService } from '../restaurant.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private restaurants: RestaurantService) { }

  userIds = [];
  ngOnInit(): void {
    this.restaurants.getUserDataFromAPI().subscribe((data) => {
      // Create an array from id properties
      this.userIds = Object.values(data).map(({ userId }) => userId);
    });
  }

  // Create a form to be able to get values
  registerForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
  });

  // Use a boolean to show alert when data is submitted.
  alert: boolean = false;

  // Create a method to show/hide alert
  updateAlert(isShown) { this.alert = isShown; }

  // Define a method to get fields from reactive form and to validate
  validateField(fieldName) {
    var field = this.registerForm.get(fieldName);
    return field.invalid && field.touched;
  }

  // Create a method to check validity of the form
  isFormValid() {
    return this.registerForm.touched && this.registerForm.valid;
  }

  // Check whether given user id is already taken or not
  doesUserExist() {
    const userId = this.registerForm.controls['userId'].value;
    return this.userIds.find(el => el == userId);
  }

  // Check whether passwords are match or not
  doPasswordsMatch() {
    return this.registerForm.controls['password'].value == this.registerForm.controls['password2'].value;
  }

  // Create a method to send user data from form to API
  sendUserData() {
    const value = {
      userId: this.registerForm.controls['userId'].value,
      password: this.registerForm.controls['password'].value
    }
    this.restaurants.postUserDataToAPI(value).subscribe();
  }
}
