import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {BlogListComponent} from './blog-list/blog-list.component';

const routes = [
  { path: '', component: BlogListComponent },
  { path: ':page', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
