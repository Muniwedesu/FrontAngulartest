import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private postData: PostDataService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("postID"));
    this.postData.get(id).subscribe(post => {
      if (post.id >= 0) {
        this.action = "update";
        this.post = post;
      }
      else {
        //implying id will be generated at the backend
        post = new Post();
        this.post = post;
      }
    });
  }
  onSubmit() {
    //to cope with nonexistent validations
    if (!this.post.title) this.post.title = "default";
    if (!this.post.content) this.post.content = "default";
    //action will be "create" or "update"
    //depending on if the post exists
    this.postData[this.action](this.post);
    this.router.navigate(["posts"]);
  }
  onDelete() {
    let modalRef = this.dialog.open(ModalComponent, {
      height: 'auto',
      width: '500px',
      backdropClass: "modal-backdrop",
      panelClass: "modal-panel",
      data: { title: this.post.title }
    });

    modalRef.afterClosed().subscribe(isConfirmed => {
      if (isConfirmed) {
        //if post exists in DB - send delete request
        if (this.post.id >= 0) this.postData.delete(this.post.id);
        this.router.navigate(["posts"]);
      }
    });
  }
}
