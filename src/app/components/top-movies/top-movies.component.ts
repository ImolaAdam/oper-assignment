import { Component, OnDestroy, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ListComponent } from '../../shared/list/list.component';

@Component({
  selector: 'app-top-movies',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './top-movies.component.html',
  styleUrl: './top-movies.component.css',
})
export class TopMoviesComponent implements OnInit, OnDestroy {
  topMovies: any[] = [];
  subs: Subscription[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.subs.push(
      this.tmdbService.getTopRatedMovies().subscribe((data) => {
        this.topMovies = data.slice(0, 10); // Get only the top 10 movies
      })
    );
  }

  ngOnDestroy(): void {
    this.subs?.forEach((s) => s.unsubscribe());
  }
}
