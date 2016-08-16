import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'table-view',
  //styleUrls:  ['styles/list.component.css'],
  templateUrl: 'templates/table.component.html',
  providers: [StoryService]
})

export class TableComponent implements OnInit {
  stories: Story[];
  //TODO: Fix how IDs are imported--b/c this is very improper
  ids: any = LIST_IDS;

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

  getStories() {
    this.storyService.getStories().then(stories => this.stories = stories);
  }

  getIDs() {
    this.storyService.getIDs().then(ids => this.ids = ids);
  }

  ngOnInit() {
    this.getStories();
    this.getIDs();
  }
}
