import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { POSTS } from "./mock-posts";
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor() { }
  getAll() {
    const posts = of(POSTS);
    return posts;
  }
  create(post?: Post) {
    //POST
    const newPost = new Post(POSTS.length + 1, "new", "post");
    POSTS.push(newPost);
  }
  update(post: Post) {
    //impl
  }
  retrieve() { }
  delete(post: Post) {
    //impl
  }
}
