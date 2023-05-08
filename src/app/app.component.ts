import { Component } from '@angular/core';
import { AppSettings } from './app.settings';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public appSettings: AppSettings, public title: Title) {
    this.title.setTitle(this.appSettings.settings.title);
  }
}
