import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
  constructor(private router: Router) {}

  scrollTo(element: string): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  navigateToRoute(route: string, scrollToItemId?: string): void {
    this.router.navigate([route]).then(() => {
      if (scrollToItemId) {
        this.scrollTo(scrollToItemId);
      }
    });
  }
}
