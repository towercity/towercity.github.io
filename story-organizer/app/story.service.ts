import { Story } from './story';
import { STORIES } from './temp-stories';
import { LIST_IDS } from './temp-stories';

import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  getStories() {
    return Promise.resolve(STORIES);
  }

  getIDs() {
    return Promise.resolve(LIST_IDS);
  }

  getStory(id: number) {
    return this.getStories()
               .then(stories => stories.find(story => story.id === id));
  }
}
