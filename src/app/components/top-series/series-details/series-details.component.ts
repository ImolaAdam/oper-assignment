import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TmdbService } from '../../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { ListItemDetails } from '../../../models/list-item-details';
import { FilmAndTvComponent } from "../../../shared/film-and-tv/film-and-tv.component";

@Component({
  selector: 'app-series-details',
  standalone: true,
  imports: [CommonModule, FilmAndTvComponent],
  templateUrl: './series-details.component.html',
  styleUrl: './series-details.component.scss',
})
export class SeriesDetailsComponent implements OnInit, OnDestroy {
  tvShowDetail!: ListItemDetails;
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
        this.tmdbService.getTvShowById(+id).subscribe((show) => {
          this.tvShowDetail = show;
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subs?.forEach((s) => s.unsubscribe());
  }
}
