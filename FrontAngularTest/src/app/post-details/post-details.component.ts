import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post = null;
  constructor(private postData: PostDataService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    //send new post obj
    this.postData.create(null);
  }
  onDelete() {
    //send index
    //if it exists - delete,
    //if not - just close & don't save 
    this.postData.delete(null);
  }

}
