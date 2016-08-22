import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { StoryService } from './story.service';

@Component({
  selector: 'upload-file',
  templateUrl: 'templates/upload-file.component.html',
  //styleUrls: ['styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [StoryService]
})
export class UploadFileComponent {

  constructor(
    private router: Router,
    private storyService: StoryService
  ) {}

  goToPage(page: string) {
    let link = ['/' + page]
    this.router.navigate(link);
  }

  log(info: any) {
    console.log(info);
  }

  uploadFile() {
    var file = document.getElementById('file').files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = (function(theFile, that) {
        return function(e) {
          that.storyService.loadStories(e.target.result);
          that.goToPage('table');
        };
      })(file, this);

      reader.readAsText(file);

    } else {
      console.log("no file");
    }
  }
}
