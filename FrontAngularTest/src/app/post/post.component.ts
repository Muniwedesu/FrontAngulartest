import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post = null;
  title = "";
  content = "";
  constructor() {
  }

  ngOnInit(): void {
    if (this.post) {
      this.title = this.post.title;
      this.content = this.post.content;
    }

  }
  onDetails() {
    console.log("123");
  }
}
