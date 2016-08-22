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
        this.hasStoredLocalStories = (localStorage["story.organizer.story.array"]);
    }
    StoryService.prototype.getStories = function () {
        if (!this.hasStoredLocalStories) {
            console.log("Using default STORIES.");
            return temp_stories_1.STORIES;
        }
        else {
            var dataArray = JSON.parse(localStorage["story.organizer.story.array"]);
            var localStories = dataArray[0];
            return localStories;
        }
    };
    StoryService.prototype.getIDs = function () {
        if (!this.hasStoredLocalStories) {
            console.log("Using default IDS.");
            return temp_stories_2.LIST_IDS;
        }
        else {
            var dataArray = JSON.parse(localStorage["story.organizer.story.array"]);
            var localIDs = dataArray[1];
            return localIDs;
        }
    };
    StoryService.prototype.getStory = function (id) {
        var stories = this.getStories();
        return stories.find(function (story) { return story.id === id; });
    };
    StoryService.prototype.saveStories = function (storiesArray, ids) {
        var dataArray = [];
        dataArray[0] = storiesArray;
        dataArray[1] = ids;
        var stringifiedArray = JSON.stringify(dataArray);
        localStorage["story.organizer.story.array"] = stringifiedArray;
    };
    StoryService.prototype.loadStories = function (uploadFile) {
        var dataArray = JSON.parse(uploadFile);
        var stories = dataArray[0];
        var ids = dataArray[1];
        this.saveStories(stories, ids);
    };
    StoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StoryService);
    return StoryService;
}());
exports.StoryService = StoryService;
//# sourceMappingURL=story.service.js.map