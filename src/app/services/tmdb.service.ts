import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  /**
   *
   * @returns The top 10 rated movies
   */
  getTopRatedMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/top_rated?api_key=${environment.tmdbApiKey}&language=en-US&page=1`;

    return this.http.get(url);
  }

  /**
   *
   * @returns The top 10 rated tv series
   */
  getTopRatedSeries(): Observable<any> {
    const url = `${this.apiUrl}/tv/top_rated?api_key=${environment.tmdbApiKey}&language=en-US&page=1`;

    return this.http.get(url);
  }
}
