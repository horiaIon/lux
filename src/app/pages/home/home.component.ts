import { Component } from '@angular/core';
import { Settings } from '../../app.settings.model';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  settings: Settings;

  constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }
}
