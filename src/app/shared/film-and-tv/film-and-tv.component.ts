import { Component, Input } from '@angular/core';
import { ListItemDetails } from '../../models/list-item-details';
import { CommonModule } from '@angular/common';
import { GetPosterPathPipe } from '../../pipes/get-poster-path.pipe';

@Component({
  selector: 'app-film-and-tvcomponent',
  standalone: true,
  imports: [CommonModule, GetPosterPathPipe],
  templateUrl: './film-and-tv.component.html',
  styleUrl: './film-and-tv.component.scss',
})
export class FilmAndTvComponent {
  @Input() mediaItem!: ListItemDetails;
  @Input() mediaType!: string;

  constructor() {}
}
