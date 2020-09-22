import { Component, OnInit } from '@angular/core';

// Import form group and form control to be able to create a form
// Also, import Validators to be able to validate inputs
import { FormGroup, FormControl, Validators } from '@angular/forms'

// Import RestaurantService to fetch from API
import { RestaurantService } from '../restaurant.service'

// Import ActivatedRoute to get id from the url
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  constructor(private router: ActivatedRoute, private restaurants: RestaurantService) { }

  ngOnInit(): void {
    if (this.router.snapshot.params.id) {
      // Since id is known via the router, set it and hide the id form
      this.setRestaurantId(this.router.snapshot.params.id);
      this.hideRestaurantIdForm = true;
      // Also, fetch data from API to fill form
      this.getCurrentDataFromAPI();
    }
    else {
      // Since id is not known enable the restaurant id form
      this.hideRestaurantIdForm = false;
      // Find the maximum value which can be used while getting a data
      this.restaurants.getDataFromAPI().subscribe((data) => {
        // Create an array from id properties
        this.restaurantIds = Object.values(data).map(({id}) => id);
      });
      // Also, disable the restaurant form, since information is not avaiable for now.
      this.disableRestaurantForm(true);
    }
  }

  // Create a form to be able to get values
  restaurantForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });

  // Create a form to be able to get restaurant id, if route does not have the id information
  restaurantIdForm = new FormGroup({
    id: new FormControl('1', [Validators.required, Validators.pattern("^[0-9]*$")]),
  });
  isButtonValid() {
    var field = this.restaurantIdForm.get('id');
    return field.valid && this.isIdValid(field.value);
  }

  // Create a property to store restaurant id
  restaurantId: number = null;
  setRestaurantId(id) {
    this.restaurantId = id;
  }

  // Create a boolean to hide id form
  hideRestaurantIdForm: boolean = true;

  // Store all restaurant ids taken from API to be able to check
  // whether given inputs are valid or not.
  restaurantIds = [];
  isIdValid(id) {
    // Check whether array contains given id or not
    if (this.restaurantIds.find(el => el == id)) {
      return true;
    }
    else {
      return false;
    }
  }

  // Use a boolean to show alert when data is submitted.
  alert: boolean = false;

  // Create a method to show/hide alert
  updateAlert(isShown) { this.alert = isShown; }

  // Create a method to disable/enable the restaurant form
  disableRestaurantForm(disabled) {
    if (disabled) {
      this.restaurantForm.disable();
    }
    else {
      this.restaurantForm.enable();
    }
  }

  // Create a method to fetch data from API
  getCurrentDataFromAPI() {
    this.restaurants.getCurrentDataFromAPI(this.restaurantId).subscribe((data) => { this.setDataToForm(data); });
  }

  // Create a method to set data to form
  setDataToForm(data) {
    this.restaurantForm.controls['name'].setValue(data['name']);
    this.restaurantForm.controls['address'].setValue(data['address']);
    this.restaurantForm.controls['email'].setValue(data['email']);
  }

  // Create a method to put data to API
  sendCurrentDataToAPI() {
    this.restaurants.putDataToAPI(this.restaurantId, this.restaurantForm.value).subscribe();
  }
}
