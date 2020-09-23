import { Injectable } from '@angular/core';

// Import CanActivate guard to be able to implement canActivate method
import { CanActivate, Router } from '@angular/router';

// Import Restaurant service to be able to find out whether logged in or not
import { RestaurantService } from './restaurant.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate {

  constructor(public router: Router, private restaurants: RestaurantService) { }

  canActivate(): boolean {
    if (!this.restaurants.loggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
