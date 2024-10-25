import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { DetailsComponent } from './Components/details/details.component';
import { ErrorComponent } from './Components/error/error.component';

export const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"Home", component:HomeComponent},
  {path:"Users", component:UsersComponent},
  {path:"Details/:id", component:DetailsComponent},
  {path:"**", component:ErrorComponent}

];
