import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'story-detail',
  styleUrls: ['styles/story-detail.component.css'],
  templateUrl: 'templates/story-detail.component.html',
  directives: [ROUTER_DIRECTIVES],
})

export class StoryDetailComponent implements OnInit {
  stories: Story[];
  // Separates story and displayStory to avoid auto-updating
  story: Story;
  displayStory: Story;

  ids: any = LIST_IDS;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getIDs();
    this.getStories();

    this.route.params.forEach((params: Params) => {
      var id = +params['id'];
      this.story = this.storyService.getStory(id);
      this.displayStory = this.story;
    });
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

  changeStatus(id: number) {
    this.displayStory.status = id;
  }

  removeSeries(arrayID: number) {
    this.displayStory.series.splice(arrayID, 1);
  }

  addSeries(newSeriesID: number) {
    this.displayStory.series.push(newSeriesID);
  }

  changeSeries(locationID: number, seriesID: number) {
    this.displayStory.series[locationID] = seriesID;
  }

  removeStory() {
    var storyID = this.story.id;
    var storiesLength = this.stories.length - 1;
    // maintains ID chronology by reducing all ids later thna removed story
    if (storyID < storiesLength) {
      for (var i = storyID; i < storiesLength; i++) {
        this.stories[i + 1].id--;
      };
    };

    //removes story by ID#
    this.stories.splice(storyID, 1);
    this.storyService.saveStories(this.stories, this.ids);

    this.goToPage('status');
  }

  goToPage(page: string) {
    let link = ['/' + page]
    this.router.navigate(link);
  }

  saveStory() {
    var storyID = this.story.id;
    this.stories[storyID] = this.displayStory;

    this.storyService.saveStories(this.stories, this.ids);

    this.goToPage('status');
  }
}
