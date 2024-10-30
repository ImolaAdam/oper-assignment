import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-movies.component.html',
  styleUrl: './top-movies.component.css',
})
export class TopMoviesComponent implements OnInit {
  topMovies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getTopRatedMovies().subscribe((data) => {
      this.topMovies = data.results.slice(0, 10); // Get only the top 10 movies
    });
  }
}
