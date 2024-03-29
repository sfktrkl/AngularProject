import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components for routing
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';

// Add the routes
const routes: Routes = [
  {
    component: AddRestaurantComponent,
    path: 'add',
    canActivate: [AuthService]
  },
  {
    component: UpdateRestaurantComponent,
    path: 'update',
    canActivate: [AuthService]
  },
  {
    component: UpdateRestaurantComponent,
    // Use parameterized route to display a page shows a specific data.
    // Id will used to fetch a specific data.
    path: 'update/:id',
    canActivate: [AuthService]
  },
  {
    component: LoginComponent,
    path:'login'
  },
  {
    component: RegisterComponent,
    path:'register'
  },
  {
    component: ListRestaurantComponent,
    path:''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
