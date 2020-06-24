import { NgModule } from '@angular/core';
import {BlogComponent} from './blog.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {BlogRoutingModule} from './blog-routing.module';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BlogComponent,
    BlogRoutingModule,
    BlogListComponent
  ]
})
export class BlogModule {}
