import { Component, OnDestroy, OnInit } from '@angular/core';
import { TmdbService } from '../../../services/tmdb.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListItemDetails } from '../../../models/list-item-details';
import { FilmAndTvComponent } from '../../../shared/film-and-tv/film-and-tv.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, FilmAndTvComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieDetail!: ListItemDetails;
  subs: Subscription[] = [];

  constructor(
    private tmdbService: TmdbService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the 'id' from the route parameters
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Convert id to a number if necessary, then make the API call
      this.subs.push(
        this.tmdbService.getMovieById(+id).subscribe((movie) => {
          this.movieDetail = movie;
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subs?.forEach((s) => s.unsubscribe());
  }
}
