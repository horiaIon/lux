import { Component } from '@angular/core';

import { AppService } from '../../core/services/app.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private appService: AppService) {}

  goToContact(): void {
    this.appService.navigateToRoute('/home', 'contact');
  }
}
