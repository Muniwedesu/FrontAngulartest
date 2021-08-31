import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

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
  isModalOpened = false;

  constructor(private postData: PostDataService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    //get post id from router address
    const id = Number(this.route.snapshot.paramMap.get("postID"));
    this.postData.get(id).subscribe(post => {
      if (post.id >= 0) {
        this.action = "update";
        this.post = post;
      }
      else {
        //implying database will generate id
        post = new Post(undefined, "", "")
        this.post = post;
      }
    }
    );

  }
  onSubmit() {
    //action will be "create" or "update"
    //depending on if the post exists
    this.postData[this.action](this.post);
  }
  onDelete() {
    let modalRef = this.dialog.open(ModalComponent, {
      height: 'auto',
      width: '500px',
      backdropClass: "modal-backdrop",
      panelClass: "modal-panel",
      data: { title: this.post.title }
    });

    modalRef.afterClosed().subscribe(result => {
      //if approved and post exists in the database
      if (result && this.post.id >= 0) {
        this.postData.delete(this.post.id);
      }

      //navigate to the list
    });
  }
}
