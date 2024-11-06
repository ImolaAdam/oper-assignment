import { Component, OnDestroy, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ListComponent } from '../../shared/list/list.component';

@Component({
  selector: 'app-top-series',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './top-series.component.html',
  styleUrl: './top-series.component.scss',
})
export class TopSeriesComponent implements OnInit, OnDestroy {
  seriesList: any[] = [];
  subs: Subscription[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.subs.push(
      this.tmdbService.getTopRatedSeries().subscribe((series) => {
        this.seriesList = series.slice(0, 10);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs?.forEach((s) => s.unsubscribe());
  }
}
