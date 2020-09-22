import { Component, OnInit } from '@angular/core';

// Import service to get data from API
import { RestaurantService } from '../restaurant.service'

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  constructor(private restaurants: RestaurantService) { }

  collection = {};
  ngOnInit(): void {
    this.restaurants.getDataFromAPI().subscribe((data) => { this.collection = data; });
  }

  // Create a method to be able to delete a restaurant
  deleteRestaurant(item) {
    this.restaurants.deleteDataFromAPI(item).subscribe();
    // Delete item from collection
    delete this.collection[item - 1];
  }

}
