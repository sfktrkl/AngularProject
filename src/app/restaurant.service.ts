import { Injectable } from '@angular/core';

// Import HttpClient to get data from url
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  // Create a method to get data from API
  getDataFromAPI() {
    return this.http.get("http://localhost:3000/restaurants");
  }
}
