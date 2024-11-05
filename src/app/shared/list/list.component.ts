import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemDetailsComponent } from './item-details/item-details.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatGridListModule, ItemDetailsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() list: any[] = [];
  baseImageUrl = 'https://image.tmdb.org/t/p/w500'; // Base URL for TMDB images

  constructor() {}

  getFullPosterPath(posterPath: string): string {
    return `${this.baseImageUrl}${posterPath}`;
  }
}
