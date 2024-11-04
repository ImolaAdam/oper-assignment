import { Routes } from '@angular/router';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { TopSeriesComponent } from './components/top-series/top-series.component';

export const routes: Routes = [
  { path: 'movies', component: TopMoviesComponent },
  { path: 'series', component: TopSeriesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];
