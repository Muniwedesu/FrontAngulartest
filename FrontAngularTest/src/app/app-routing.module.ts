import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';

// const routes: Routes = [
//   {
//     path: 'products',
//     component: ProductListComponent,
//     children: [
//       { path: "", component: ProductSelectionComponent },
//       { path: ':categoryId/details/:productId', component: DetailsComponent },
//       { path: ':categoryId', component: ProductSelectionComponent },
//     ],
//   },
// ];

const routes: Routes = [
  {
    path: "",
    redirectTo: "posts",
    pathMatch: 'full'
  },
  {
    path: "posts",
    component: PostsListComponent
  },
  {
    path: "posts/:postID",
    component: PostDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
