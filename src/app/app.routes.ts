import { Routes } from '@angular/router';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { TopSeriesComponent } from './components/top-series/top-series.component';
import { MovieDetailsComponent } from './components/top-movies/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './components/top-series/series-details/series-details.component';

export const routes: Routes = [
  { path: 'movies', component: TopMoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'series', component: TopSeriesComponent },
  { path: 'series/:id', component: SeriesDetailsComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];
