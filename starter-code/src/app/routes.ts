import { Routes } from "@angular/router";
import { MyhomeComponent } from "./myhome/myhome.component";
import { MymovieComponent } from "./mymovie/mymovie.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyhomeComponent },
  { path: 'movie/:id', component: MymovieComponent }
];