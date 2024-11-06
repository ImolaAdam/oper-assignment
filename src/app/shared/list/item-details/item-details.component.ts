import { Component, Input } from '@angular/core';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [TruncatePipe, CommonModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
})
export class ItemDetailsComponent {
  @Input() details: any;

  constructor() {}
}
