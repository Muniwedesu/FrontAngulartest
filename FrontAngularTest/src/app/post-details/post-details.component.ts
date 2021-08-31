import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post = null;
  action: string = "create";
  constructor(private postData: PostDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get post id from router address
    const id = Number(this.route.snapshot.paramMap.get("postID"));
    this.postData.get(id).subscribe(post => {
      if (post.id >= 0) {
        console.log("existing");
        this.action = "update";
        this.post = post;
      }
      else {
        console.log("new");
        //implying database will generate id
        post = new Post(undefined, "new post title", "post content")
        this.post = post;
        //create new
      }
    }
    );

  }
  onSubmit() {
    //send new post obj or update existing and go back

    //I could set action to null and wait until it will be set
    console.log("submit");
    //action is selected depending on the received data on init
    this.postData[this.action](this.post);
  }
  onDelete() {
    //send index
    //if it exists - delete,
    //if not - just close & don't save
    console.log("delete");
    if (this.post.id >= 0) {
      //if it exists in the database
      this.postData.delete(this.post.id);
    }
  }

}
