import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { Router, RouterModule } from '@angular/router';
import { GetPosterPathPipe } from '../../pipes/get-poster-path.pipe';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    ItemDetailsComponent,
    RouterModule,
    GetPosterPathPipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() list: ListItem[] = [];

  constructor(private router: Router) {}

  /**
   * 
   * @param id Selected movie or series id
   */
  onNavigation(id: number) {
    this.router.navigate([this.router.url + '/' + id]);
  }
}
