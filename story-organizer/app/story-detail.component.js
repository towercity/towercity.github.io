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
var story_1 = require('./story');
var story_service_1 = require('./story.service');
var temp_stories_1 = require('./temp-stories');
var StoryDetailComponent = (function () {
    function StoryDetailComponent(storyService, route) {
        this.storyService = storyService;
        this.route = route;
        this.navigated = false;
        this.ids = temp_stories_1.LIST_IDS;
    }
    StoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getIDs();
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.storyService.getStory(id)
                    .then(function (story) { return _this.story = story; });
            }
            else {
                _this.navigated = false;
                _this.story = new story_1.Story();
            }
        });
    };
    StoryDetailComponent.prototype.log = function (info) {
        console.log(info);
    };
    StoryDetailComponent.prototype.getIDs = function () {
        var _this = this;
        this.storyService.getIDs().then(function (ids) { return _this.ids = ids; });
    };
    StoryDetailComponent.prototype.removeSeries = function (arrayID) {
        this.story.series.splice(arrayID, 1);
    };
    StoryDetailComponent.prototype.addSeries = function (seriesID) {
        this.story.series.push(seriesID);
    };
    StoryDetailComponent = __decorate([
        core_1.Component({
            selector: 'story-detail',
            styleUrls: ['styles/story-detail.component.css'],
            templateUrl: 'templates/story-detail.component.html'
        }), 
        __metadata('design:paramtypes', [story_service_1.StoryService, router_1.ActivatedRoute])
    ], StoryDetailComponent);
    return StoryDetailComponent;
}());
exports.StoryDetailComponent = StoryDetailComponent;
//# sourceMappingURL=story-detail.component.js.map