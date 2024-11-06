import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getPosterPath',
  standalone: true,
  pure: true
})
export class GetPosterPathPipe implements PipeTransform {
  transform(posterPath: string): unknown {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500'; // Base URL for TMDB images

    return `${baseImageUrl}${posterPath}`;
  }
}
