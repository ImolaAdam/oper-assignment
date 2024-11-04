import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'isActiveRoute',
  pure: false,
  standalone: true,
})
export class IsActiveRoutePipe implements PipeTransform {
  constructor(private router: Router) {}

  transform(route: string): boolean {
    // Check if the current URL includes the specified route
    return this.router.url.includes(route);
  }
}
