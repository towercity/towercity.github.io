import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'series-list-view',
  styleUrls:  ['styles/tables.css'],
  templateUrl: 'templates/series-list.component.html',
  providers: [StoryService]
})

export class SeriesListComponent implements OnInit {
  stories: Story[];
  //TODO: Fix how IDs are imported--b/c this is very improper
  ids: any = LIST_IDS;

  constructor(
    private storyService: StoryService,
    private router: Router
  ) { }

  log(info: any) {
    console.log(info);
  }

  isInSeries(story: Story, idx: number) {
    var inSer: boolean = false;
    var seriesArray = story.series;

    seriesArray.forEach(function(series) {
      if (series === idx) {
        inSer = true;
      }
    });

    return inSer;
  }

  goToStory(story: Story) {
    let link = ['/story', story.id];
    this.router.navigate(link);
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
