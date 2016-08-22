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
var EditSeriesComponent = (function () {
    function EditSeriesComponent(storyService, router) {
        this.storyService = storyService;
        this.router = router;
    }
    EditSeriesComponent.prototype.ngOnInit = function () {
        this.getIDs();
    };
    EditSeriesComponent.prototype.log = function (info) {
        console.log(info);
    };
    EditSeriesComponent.prototype.getIDs = function () {
        this.ids = this.storyService.getIDs();
    };
    EditSeriesComponent.prototype.goToPage = function (page) {
        var link = ['/' + page];
        this.router.navigate(link);
    };
    EditSeriesComponent.prototype.addSeries = function () {
        this.ids.series.push(this.newSeries);
        this.storyService.saveStories(this.storyService.getStories(), this.ids);
        this.newSeries = null;
    };
    EditSeriesComponent.prototype.removeSeries = function (id) {
        var stories = this.storyService.getStories();
        var seriesLength = this.ids.series.length - 1;
        var ids = this.ids;
        stories.forEach(function (story) {
            story.series.forEach(function (series, index) {
                if (series === id) {
                    story.series.splice(index, 1);
                }
                else if (series > id) {
                    story.series[index]--;
                }
            });
        });
        this.ids.series.splice(id, 1);
        this.storyService.saveStories(stories, this.ids);
    };
    EditSeriesComponent = __decorate([
        core_1.Component({
            selector: 'edit-series',
            styleUrls: ['styles/edit-series.component.css'],
            templateUrl: 'templates/edit-series.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [story_service_1.StoryService, router_1.Router])
    ], EditSeriesComponent);
    return EditSeriesComponent;
}());
exports.EditSeriesComponent = EditSeriesComponent;
//# sourceMappingURL=edit-series.component.js.map