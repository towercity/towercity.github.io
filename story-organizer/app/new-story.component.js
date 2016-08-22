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
var NewStoryComponent = (function () {
    function NewStoryComponent(storyService, route, router) {
        this.storyService = storyService;
        this.route = route;
        this.router = router;
        this.newStory = {
            id: -1,
            title: '',
            desc: '',
            status: 2,
            series: []
        };
        this.navigated = false;
        this.ids = temp_stories_1.LIST_IDS;
    }
    NewStoryComponent.prototype.ngOnInit = function () {
        this.getStories();
        this.getIDs();
    };
    NewStoryComponent.prototype.log = function (info) {
        console.log(info);
    };
    NewStoryComponent.prototype.getIDs = function () {
        this.ids = this.storyService.getIDs();
    };
    NewStoryComponent.prototype.getStories = function () {
        this.stories = this.storyService.getStories();
    };
    NewStoryComponent.prototype.removeSeries = function (arrayID) {
        this.newStory.series.splice(arrayID, 1);
    };
    NewStoryComponent.prototype.changeStatus = function (id) {
        this.newStory.status = id;
    };
    NewStoryComponent.prototype.addSeries = function (newSeriesID) {
        this.newStory.series.push(newSeriesID);
    };
    NewStoryComponent.prototype.changeSeries = function (locationID, seriesID) {
        this.newStory.series[locationID] = seriesID;
    };
    NewStoryComponent.prototype.addStory = function () {
        this.newStory.id = this.stories.length;
        this.newStory.series.push(this.newSeriesID);
        this.stories.push(this.newStory);
        this.storyService.saveStories(this.stories, this.ids);
        this.goToPage('table');
    };
    NewStoryComponent.prototype.goToPage = function (page) {
        var link = ['/' + page];
        this.router.navigate(link);
    };
    NewStoryComponent = __decorate([
        core_1.Component({
            selector: 'new-story',
            styleUrls: ['styles/story-detail.component.css'],
            templateUrl: 'templates/new-story.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [story_service_1.StoryService]
        }), 
        __metadata('design:paramtypes', [story_service_1.StoryService, router_1.ActivatedRoute, router_1.Router])
    ], NewStoryComponent);
    return NewStoryComponent;
}());
exports.NewStoryComponent = NewStoryComponent;
//# sourceMappingURL=new-story.component.js.map