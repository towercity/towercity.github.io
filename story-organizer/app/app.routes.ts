import { provideRouter, RouterConfig }  from '@angular/router';

import { SeriesListComponent } from './series-list.component';
import { StatusListComponent } from './status-list.component';
import { TableComponent } from './table.component';
import { StoryDetailComponent } from './story-detail.component';
import { NewStoryComponent } from './new-story.component';
import { UploadFileComponent } from './upload-file.component';
import { EditSeriesComponent } from './edit-series.component';

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
  },
  {
    path: 'upload-file',
    component: UploadFileComponent
  },
  {
    path: 'edit-series',
    component: EditSeriesComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
