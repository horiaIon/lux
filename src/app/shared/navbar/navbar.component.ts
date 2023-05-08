import { Component } from '@angular/core';

import { AppService } from '../../core/services/app.service';
import { Settings } from '../../app.settings.model';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  settings: Settings;

  constructor(private appService: AppService, public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  toggleNavbarCollapsing() {
    this.settings.theme.showMenu = !this.settings.theme.showMenu;
  }

  goToContact(): void {
    this.appService.navigateToRoute('/home', 'contact');
    this.toggleNavbarCollapsing();
  }
}
