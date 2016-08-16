"use strict";
var router_1 = require('@angular/router');
var series_list_component_1 = require('./series-list.component');
var status_list_component_1 = require('./status-list.component');
var table_component_1 = require('./table.component');
var story_detail_component_1 = require('./story-detail.component');
var new_story_component_1 = require('./new-story.component');
var routes = [
    {
        path: '',
        redirectTo: '/table',
        pathMatch: 'full'
    },
    {
        path: 'series',
        component: series_list_component_1.SeriesListComponent
    },
    {
        path: 'status',
        component: status_list_component_1.StatusListComponent
    },
    {
        path: 'table',
        component: table_component_1.TableComponent
    },
    {
        path: 'story/:id',
        component: story_detail_component_1.StoryDetailComponent
    },
    {
        path: 'new-story',
        component: new_story_component_1.NewStoryComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map