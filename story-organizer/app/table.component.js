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
var TableComponent = (function () {
    function TableComponent(storyService, router) {
        this.storyService = storyService;
        this.router = router;
        //TODO: Fix how IDs are imported--b/c this is very improper
        this.ids = temp_stories_1.LIST_IDS;
    }
    TableComponent.prototype.goToStory = function (story) {
        var link = ['/story', story.id];
        this.router.navigate(link);
    };
    TableComponent.prototype.log = function (info) {
        console.log(info);
    };
    TableComponent.prototype.getStories = function () {
        var _this = this;
        this.storyService.getStories().then(function (stories) { return _this.stories = stories; });
    };
    TableComponent.prototype.getIDs = function () {
        var _this = this;
        this.storyService.getIDs().then(function (ids) { return _this.ids = ids; });
    };
    TableComponent.prototype.ngOnInit = function () {
        this.getStories();
        this.getIDs();
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table-view',
            //styleUrls:  ['styles/list.component.css'],
            templateUrl: 'templates/table.component.html',
            providers: [story_service_1.StoryService]
        }), 
        __metadata('design:paramtypes', [story_service_1.StoryService, router_1.Router])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map