import { Story } from './story';
import { STORIES } from './temp-stories';
import { LIST_IDS } from './temp-stories';

import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  hasStoredLocalStories: boolean = (localStorage["story.organizer.story.array"]);

  getStories() {
    if(!this.hasStoredLocalStories) {
      console.log("Using default STORIES.");
      return STORIES;

    } else {
      var dataArray = JSON.parse(localStorage["story.organizer.story.array"]);
      var localStories = dataArray[0];
      return localStories;
    }
  }

  getIDs() {
    if(!this.hasStoredLocalStories) {
      console.log("Using default IDS.");
      return LIST_IDS;

    } else {
      var dataArray = JSON.parse(localStorage["story.organizer.story.array"]);
      var localIDs = dataArray[1];
      return localIDs;
    }
  }

  getStory(id: number) {
    var stories = this.getStories();
    return stories.find(story => story.id === id);
  }

  saveStories(storiesArray: Story[], ids: any) {
    var dataArray = [];
    dataArray[0] = storiesArray;
    dataArray[1] = ids;

    var stringifiedArray = JSON.stringify(dataArray);
    localStorage["story.organizer.story.array"] = stringifiedArray;
  }

  loadStories(uploadFile: string) {
    var dataArray = JSON.parse(uploadFile);
    var stories = dataArray[0];
    var ids = dataArray[1];

    this.saveStories(stories, ids);
  }
}
