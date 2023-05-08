import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
  settings = new Settings('LauraP-UX', {
    showMenu: true,
  });
}
