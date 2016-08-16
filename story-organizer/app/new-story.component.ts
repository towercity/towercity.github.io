import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'new-story',
  styleUrls: ['styles/story-detail.component.css'],
  templateUrl: 'templates/new-story.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [StoryService]
})

export class NewStoryComponent implements OnInit {
  stories: Story[];
  newStory: Story = {
    title: '',
    desc: '',
    status: 2,
    series: []
  }
  newSeriesID: number;
  navigated = false;
  ids: any = LIST_IDS;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getStories();
    this.getIDs();
  }

  log(info: any) {
    console.log(info);
  }

  getIDs() {
    this.storyService.getIDs().then(ids => this.ids = ids);
  }

  getStories() {
    this.storyService.getStories().then(stories => this.stories = stories);

  }

  removeSeries(arrayID: number) {
    this.newStory.series.splice(arrayID, 1);
  }

  addSeries(seriesID: number) {
    this.newStory.series.push(seriesID);
  }

  addStory() {
    this.newStory.id = this.stories.length;
    this.stories.push(this.newStory);
    this.goToPage('table');
  }

  goToPage(page: string) {
    let link = ['/' + page]
    this.router.navigate(link);
  }
}
