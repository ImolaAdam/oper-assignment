import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'c270333dd6c30aca5622598f8c2d792a';

  constructor(private http: HttpClient) {}

  // Method to get top-rated movies
  getTopRatedMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.http.get(url);
  }
}
