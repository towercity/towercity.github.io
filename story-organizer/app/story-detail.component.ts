import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'story-detail',
  styleUrls: ['styles/story-detail.component.css'],
  templateUrl: 'templates/story-detail.component.html'
})

export class StoryDetailComponent implements OnInit {
  story: Story;
  newSeriesID: number;
  navigated = false;
  ids: any = LIST_IDS;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getIDs();

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.storyService.getStory(id)
            .then(story => this.story = story);
      } else {
        this.navigated = false;
        this.story = new Story();
      }
    });
  }

  log(info: any) {
    console.log(info);
  }

  getIDs() {
    this.storyService.getIDs().then(ids => this.ids = ids);
  }

  removeSeries(arrayID: number) {
    this.story.series.splice(arrayID, 1);
  }

  addSeries(seriesID: number) {
    this.story.series.push(seriesID);
  }
}
