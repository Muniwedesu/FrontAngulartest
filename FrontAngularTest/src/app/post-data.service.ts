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
    const posts = of([...POSTS]);
    return posts;
  }
  get(id) {
    //receive copied Post obj
    const post = of({ ...POSTS.find(x => x.id === id) });
    return post;
  }
  create(post?: Post) {
    const newPost = new Post(POSTS.length + 1, post.title, post.content);
    POSTS.push(newPost);
  }
  update(post: Post) {
    //emulates sending new object to a server
    const postToUpdate = POSTS.find(p => p.id === post.id);
    //this should be done at backend
    for (let prop in postToUpdate) {
      postToUpdate[prop] = post[prop]
    }
  }
  delete(id: number) {
    POSTS.splice(POSTS.findIndex((p: Post) => p.id === id), 1);
  }
}
