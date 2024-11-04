import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { IsActiveRoutePipe } from '../pipes/is-active-route.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterModule, IsActiveRoutePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOptions = {
    appName: 'Oper',
    movies: 'MOVIES',
    series: 'TV SHOWS',
  };

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    console.log(this.router.url.includes(route))
    return this.router.url.includes(route);
  }
}
