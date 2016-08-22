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
    private router: Router,
    private storyService: StoryService
  ) {}

  goToPage(page: string) {
    let link = ['/' + page]
    this.router.navigate(link);
  }

  saveToDisk() {
    var stories = this.storyService.getStories();
    var ids = this.storyService.getIDs();
    this.storyService.saveStories(stories, ids);

    var blob = new Blob([localStorage["story.organizer.story.array"]], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "story-organizer-data.sod")
  }
}
