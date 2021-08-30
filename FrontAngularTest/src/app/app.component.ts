import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { PostDataService } from './post-data.service';
import { POSTS } from "./mock-posts";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontAngularTest';
}
