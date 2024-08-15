import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'home-component', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'destination-detail', component: DestinationDetailComponent },
    { path: 'favourites', component: FavouritesComponent },
    { path: 'about', component: AboutComponent },
    { path: '',   redirectTo: '/home-component', pathMatch: 'full' }
];