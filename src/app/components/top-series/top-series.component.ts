import { Component, OnDestroy, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {
  Subject,
  Subscription,
} from 'rxjs';
import { ListComponent } from '../../shared/list/list.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-top-series',
  standalone: true,
  imports: [CommonModule, ListComponent, FormsModule, MatInputModule, MatIconModule],
  templateUrl: './top-series.component.html',
  styleUrl: './top-series.component.scss',
})
export class TopSeriesComponent implements OnInit, OnDestroy {
  seriesList: ListItem[] = [];
  subs: Subscription[] = [];

  searchResults: ListItem[] = [];
  searchTerm: string = '';

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.subs.push(
      this.tmdbService.getTopRatedSeries().subscribe((series) => {
        this.seriesList = series.slice(0, 10);
      })
    );

    // Subscribe to shared search term and search results
    this.subs.push(
      this.tmdbService.searchTerm$.subscribe((term) => {
        this.searchTerm = term;
      })
    );

    this.subs.push(
      this.tmdbService.searchResults$.subscribe((results) => {
        this.searchResults = results;
      })
    );
  }

  onSearchTermChange(term: string): void {
    this.tmdbService.setSearchTerm(term); // Update shared search term in the service
  }

  ngOnDestroy(): void {
    this.subs?.forEach((s) => s.unsubscribe());
  }
}
