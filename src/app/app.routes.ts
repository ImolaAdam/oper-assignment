import { Routes } from '@angular/router';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';

export const routes: Routes = [
  { path: 'movies', component: TopMoviesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];
