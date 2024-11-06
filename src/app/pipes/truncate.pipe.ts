import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true,
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number = 120): string {
    if (!value) return '';
    if (value.length <= maxLength) return value; // Return original
    return value.slice(0, maxLength) + '...'; // Slice and add ellipsis
  }
}
