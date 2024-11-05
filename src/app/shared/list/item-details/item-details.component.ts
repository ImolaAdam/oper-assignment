import { Component, Input } from '@angular/core';
import { TruncatePipe } from '../../../components/pipes/truncate.pipe';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
})
export class ItemDetailsComponent {
  @Input() details: any;

  constructor() {}
}
