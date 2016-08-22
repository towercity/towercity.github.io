import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'status-list-view',
  styleUrls:  ['styles/tables.css'],
  templateUrl: 'templates/status-list.component.html',
  providers: [StoryService]
})

export class StatusListComponent implements OnInit {
  stories: Story[];
  //TODO: Fix how IDs are imported--b/c this is very improper
  ids: any = LIST_IDS;
  error: any;

  constructor(
    private storyService: StoryService,
    private router: Router
  ) { }

  goToStory(story: Story) {
    let link = ['/story', story.id];
    this.router.navigate(link);
  }

  log(info: any) {
    console.log(info);
  }

  getIDs() {
    this.ids = this.storyService.getIDs();
  }

  getStories() {
    this.stories = this.storyService.getStories();
  }

  ngOnInit() {
    this.getStories();
    this.getIDs();
  }
}
