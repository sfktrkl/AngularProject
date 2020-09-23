import { Component } from '@angular/core';

// Import RestaurantService to get login information
import { RestaurantService } from './restaurant.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  constructor(public restaurants: RestaurantService) { }

  // Create a method to set login property of service
  login(bool) { this.restaurants.loggedIn = bool; }
}
