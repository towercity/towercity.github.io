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
var temp_stories_1 = require('./temp-stories');
var temp_stories_2 = require('./temp-stories');
var core_1 = require('@angular/core');
var StoryService = (function () {
    function StoryService() {
    }
    StoryService.prototype.getStories = function () {
        return Promise.resolve(temp_stories_1.STORIES);
    };
    StoryService.prototype.getIDs = function () {
        return Promise.resolve(temp_stories_2.LIST_IDS);
    };
    StoryService.prototype.getStory = function (id) {
        return this.getStories()
            .then(function (stories) { return stories.find(function (story) { return story.id === id; }); });
    };
    StoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StoryService);
    return StoryService;
}());
exports.StoryService = StoryService;
//# sourceMappingURL=story.service.js.map