import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { StoryService } from './story.service';

@Component({
  selector: 'main-app',
  templateUrl: 'templates/app.component.html',
  styleUrls: ['styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    StoryService
  ]
})
export class AppComponent {
  title = 'Story Organizer';
  author = 'Matthew Nerger';

  constructor(
    private router: Router
  ) {}

  goToPage(page: string) {
    let link = ['/' + page]
    this.router.navigate(link);
  }
}
