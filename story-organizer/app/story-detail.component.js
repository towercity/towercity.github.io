"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var story_service_1 = require('./story.service');
var temp_stories_1 = require('./temp-stories');
var StoryDetailComponent = (function () {
    function StoryDetailComponent(storyService, route, router) {
        this.storyService = storyService;
        this.route = route;
        this.router = router;
        this.ids = temp_stories_1.LIST_IDS;
    }
    StoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getIDs();
        this.getStories();
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.story = _this.storyService.getStory(id);
            _this.displayStory = _this.story;
        });
    };
    StoryDetailComponent.prototype.log = function (info) {
        console.log(info);
    };
    StoryDetailComponent.prototype.getIDs = function () {
        this.ids = this.storyService.getIDs();
    };
    StoryDetailComponent.prototype.getStories = function () {
        this.stories = this.storyService.getStories();
    };
    StoryDetailComponent.prototype.changeStatus = function (id) {
        this.displayStory.status = id;
    };
    StoryDetailComponent.prototype.removeSeries = function (arrayID) {
        this.displayStory.series.splice(arrayID, 1);
    };
    StoryDetailComponent.prototype.addSeries = function (newSeriesID) {
        this.displayStory.series.push(newSeriesID);
    };
    StoryDetailComponent.prototype.changeSeries = function (locationID, seriesID) {
        this.displayStory.series[locationID] = seriesID;
    };
    StoryDetailComponent.prototype.removeStory = function () {
        var storyID = this.story.id;
        var storiesLength = this.stories.length - 1;
        // maintains ID chronology by reducing all ids later thna removed story
        if (storyID < storiesLength) {
            for (var i = storyID; i < storiesLength; i++) {
                this.stories[i + 1].id--;
            }
            ;
        }
        ;
        //removes story by ID#
        this.stories.splice(storyID, 1);
        this.storyService.saveStories(this.stories, this.ids);
        this.goToPage('status');
    };
    StoryDetailComponent.prototype.goToPage = function (page) {
        var link = ['/' + page];
        this.router.navigate(link);
    };
    StoryDetailComponent.prototype.saveStory = function () {
        var storyID = this.story.id;
        this.stories[storyID] = this.displayStory;
        this.storyService.saveStories(this.stories, this.ids);
        this.goToPage('status');
    };
    StoryDetailComponent = __decorate([
        core_1.Component({
            selector: 'story-detail',
            styleUrls: ['styles/story-detail.component.css'],
            templateUrl: 'templates/story-detail.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [story_service_1.StoryService, router_1.ActivatedRoute, router_1.Router])
    ], StoryDetailComponent);
    return StoryDetailComponent;
}());
exports.StoryDetailComponent = StoryDetailComponent;
//# sourceMappingURL=story-detail.component.js.map