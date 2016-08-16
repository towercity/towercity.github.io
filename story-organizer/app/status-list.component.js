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
var StatusListComponent = (function () {
    function StatusListComponent(storyService, router) {
        this.storyService = storyService;
        this.router = router;
        //TODO: Fix how IDs are imported--b/c this is very improper
        this.ids = temp_stories_1.LIST_IDS;
    }
    StatusListComponent.prototype.goToStory = function (story) {
        var link = ['/story', story.id];
        this.router.navigate(link);
    };
    StatusListComponent.prototype.log = function (info) {
        console.log(info);
    };
    StatusListComponent.prototype.getStories = function () {
        var _this = this;
        this.storyService
            .getStories()
            .then(function (stories) { return _this.stories = stories; })
            .catch(function (error) { return _this.error = error; });
    };
    StatusListComponent.prototype.getIDs = function () {
        var _this = this;
        this.storyService.getIDs().then(function (ids) { return _this.ids = ids; });
    };
    StatusListComponent.prototype.ngOnInit = function () {
        this.getStories();
        this.getIDs();
    };
    StatusListComponent = __decorate([
        core_1.Component({
            selector: 'status-list-view',
            styleUrls: ['styles/tables.css'],
            templateUrl: 'templates/status-list.component.html',
            providers: [story_service_1.StoryService]
        }), 
        __metadata('design:paramtypes', [story_service_1.StoryService, router_1.Router])
    ], StatusListComponent);
    return StatusListComponent;
}());
exports.StatusListComponent = StatusListComponent;
//# sourceMappingURL=status-list.component.js.map