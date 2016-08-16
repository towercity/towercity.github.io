import { provideRouter, RouterConfig }  from '@angular/router';

import { SeriesListComponent } from './series-list.component';
import { StatusListComponent } from './status-list.component';
import { TableComponent } from './table.component';
import { StoryDetailComponent } from './story-detail.component';
import { NewStoryComponent } from './new-story.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
  {
    path: 'series',
    component: SeriesListComponent
  },
  {
    path: 'status',
    component: StatusListComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'story/:id',
    component: StoryDetailComponent
  },
  {
    path: 'new-story',
    component: NewStoryComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
