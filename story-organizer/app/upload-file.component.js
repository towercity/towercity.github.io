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
var UploadFileComponent = (function () {
    function UploadFileComponent(router, storyService) {
        this.router = router;
        this.storyService = storyService;
    }
    UploadFileComponent.prototype.goToPage = function (page) {
        var link = ['/' + page];
        this.router.navigate(link);
    };
    UploadFileComponent.prototype.log = function (info) {
        console.log(info);
    };
    UploadFileComponent.prototype.uploadFile = function () {
        var file = document.getElementById('file').files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = (function (theFile, that) {
                return function (e) {
                    that.storyService.loadStories(e.target.result);
                    that.goToPage('table');
                };
            })(file, this);
            reader.readAsText(file);
        }
        else {
            console.log("no file");
        }
    };
    UploadFileComponent = __decorate([
        core_1.Component({
            selector: 'upload-file',
            templateUrl: 'templates/upload-file.component.html',
            //styleUrls: ['styles/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [story_service_1.StoryService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, story_service_1.StoryService])
    ], UploadFileComponent);
    return UploadFileComponent;
}());
exports.UploadFileComponent = UploadFileComponent;
//# sourceMappingURL=upload-file.component.js.map