import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ListItem } from '../models/list-item';
import { ListItemDetails } from '../models/list-item-details';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private searchTermSubject = new BehaviorSubject<string>(''); // Observable for the search term
  private searchResultsSubject = new BehaviorSubject<any[]>([]); // Observable for search results

  // Public observables to be shared across components
  searchTerm$ = this.searchTermSubject.asObservable();
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * @returns The top 10 rated movies
   */
  getTopRatedMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/top_rated?api_key=${environment.tmdbApiKey}&language=en-US&page=1`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        // Map the response to match ListItem interface
        return response.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          overview: movie.overview,
          poster_path: movie.poster_path,
        })) as ListItem[];
      })
    );
  }

  /**
   * @returns The top 10 rated TV series
   */
  getTopRatedSeries(): Observable<any> {
    const url = `${this.apiUrl}/tv/top_rated?api_key=${environment.tmdbApiKey}&language=en-US&page=1`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        // Map the response to match ListItem interface
        return response.results.map((series: any) => ({
          id: series.id,
          title: series.name,
          rating: series.vote_average,
          overview: series.overview,
          poster_path: series.poster_path,
        })) as ListItem[];
      })
    );
  }

  /**
   * @param movieId The ID of the movie to retrieve details for
   * @returns Details of the specified movie
   */
  getMovieById(movieId: number): Observable<ListItemDetails> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${environment.tmdbApiKey}&language=en-US`;

    return this.http.get<any>(url).pipe(
      map((movie) => ({
        adult: movie.adult,
        name: movie.title, // Title is for movies
        created_by: movie.created_by?.map((creator: any) => creator.name) || [],
        first_air_date: new Date(movie.first_air_date),
        genres: movie.genres?.map((genre: any) => genre.name) || [],
        last_air_date: new Date(movie.last_air_date),
        number_of_episodes: movie.number_of_episodes || 0,
        number_of_seasons: movie.number_of_seasons || 0,
        original_language: movie.original_language,
        original_name: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        production_companies:
          movie.production_companies?.map((company: any) => company.name) || [],
        seasons:
          movie.seasons?.map((season: any) => ({
            air_date: new Date(season.air_date),
            episode_count: season.episode_count,
            id: season.id,
            name: season.name,
            overview: season.overview,
            poster_path: season.poster_path,
            season_number: season.season_number,
          })) || [],
        status: movie.status,
        vote_average: movie.vote_average,
        tagline: movie.tagline,
      }))
    );
  }

  /**
   * @param tvId The ID of the TV show to retrieve details for
   * @returns Details of the specified TV show
   */
  getTvShowById(tvId: number): Observable<any> {
    const url = `${this.apiUrl}/tv/${tvId}?api_key=${environment.tmdbApiKey}&language=en-US`;
    return this.http.get<any>(url).pipe(
      map((series) => ({
        adult: series.adult,
        name: series.name, // Title is for movies
        created_by:
          series.created_by?.map((creator: any) => creator.name) || [],
        first_air_date: new Date(series.first_air_date),
        genres: series.genres?.map((genre: any) => genre.name) || [],
        last_air_date: new Date(series.last_air_date),
        number_of_episodes: series.number_of_episodes || 0,
        number_of_seasons: series.number_of_seasons || 0,
        original_language: series.original_language,
        original_name: series.original_name,
        overview: series.overview,
        popularity: series.popularity,
        poster_path: series.poster_path,
        production_companies:
          series.production_companies?.map((company: any) => company.name) ||
          [],
        seasons:
          series.seasons?.map((season: any) => ({
            air_date: new Date(season.air_date),
            episode_count: season.episode_count,
            id: season.id,
            name: season.name,
            overview: season.overview,
            poster_path: season.poster_path,
            season_number: season.season_number,
          })) || [],
        status: series.status,
        vote_average: series.vote_average,
        tagline: series.tagline,
      }))
    );
  }

  /**
   * Sets the current search term and triggers search if term length is 3 or more
   */
  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term); // Emit the search term
    if (term.length >= 3) {
      this.searchMoviesAndTv(term); // Trigger the search if term is long enough
    } else {
      this.searchResultsSubject.next([]); // Clear results if term is too short
    }
  }

  /**
   * Fetches search results for movies and TV shows based on the current search term
   */
  private searchMoviesAndTv(term: string): void {
    const url = `${this.apiUrl}/search/multi?api_key=${environment.tmdbApiKey}&language=en-US&query=${term}`;

    this.http
      .get<any>(url)
      .pipe(
        map((response) =>
          response.results.map((item: any) => ({
            id: item.id,
            title: item.title || item.name, // Movies use "title", TV shows use "name"
            rating: item.vote_average,
            overview: item.overview,
            media_type: item.media_type, // Either 'movie' or 'tv'
            poster_path: item.poster_path,
          }))
        )
      )
      .subscribe((results) => this.searchResultsSubject.next(results));
  }
}
