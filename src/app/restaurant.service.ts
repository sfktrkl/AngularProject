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

  // Create a method to post given data
  setDataToAPI(data) {
    return this.http.post("http://localhost:3000/restaurants", data);
  }

  // Create a method to delete data from API
  deleteDataFromAPI(id) {
    return this.http.delete(`http://localhost:3000/restaurants/${id}`);
  }
}
