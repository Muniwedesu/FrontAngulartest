import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  title = 'FrontAngularTest';
  posts$: Observable<Post[]> = new Observable<Post[]>();
  log = null;
  constructor(private postsData: PostDataService) {
    this.posts$ = postsData.getAll();
    // this.log = POSTS.length;
  }
  onCreate() {
    this.postsData.create();
  }
  ngOnInit(): void {
  }

}
