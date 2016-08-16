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
var story_service_1 = require('./story.service');
var temp_stories_1 = require('./temp-stories');
var ListComponent = (function () {
    function ListComponent(storyService) {
        this.storyService = storyService;
        //TODO: Fix how IDs are imported--b/c this is very improper
        this.ids = temp_stories_1.LIST_IDS;
        this.format = 'status';
    }
    ListComponent.prototype.log = function (info) {
        console.log(info);
    };
    ListComponent.prototype.switchFormat = function () {
        if (this.format === 'status') {
            this.format = 'series';
        }
        else if (this.format === 'series') {
            this.format = 'status';
        }
    };
    ListComponent.prototype.getStories = function () {
        var _this = this;
        this.storyService.getStories().then(function (stories) { return _this.stories = stories; });
    };
    ListComponent.prototype.getIDs = function () {
        var _this = this;
        this.storyService.getIDs().then(function (ids) { return _this.ids = ids; });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getStories();
        this.getIDs();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list-view',
            //styleUrls:  ['styles/list.component.css'],
            templateUrl: 'templates/list.component.html',
            providers: [story_service_1.StoryService]
        }), 
        __metadata('design:paramtypes', [story_service_1.StoryService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
// make a url split--list/series and list/status. use an ngif in the template
// after the heading and
//# sourceMappingURL=list.component.js.map