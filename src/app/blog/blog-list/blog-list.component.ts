import {Component, OnInit} from '@angular/core';
import {ContentBlogPostService, Blogpost, Media, ContentMediaService} from 'flotiq';
import {ActivatedRoute, Params} from '@angular/router';
import {BlogListService} from './blog-list.service';
import {ImageService} from '../image.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts: Blogpost[];
  images: Media[];
  totalPages: number;
  page: number;

  constructor(
    private flotiqService: ContentBlogPostService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private blogpostService: BlogListService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = +params.page || 1;
      this.blogpostService.getBlogPosts(this.page).subscribe((blogPosts) => {
        this.blogPosts = blogPosts.data;
        this.totalPages = blogPosts.total_pages;
        this.page = blogPosts.current_page;
        this.images = [];
        this.blogPosts.forEach(post => {
          if (post.thumbnail && post.thumbnail[0]) {
            this.imageService.getImage(post.thumbnail[0].dataUrl.split('/')[5]).subscribe((image) => {
              this.images[post.id] = image;
            });
          }
        });
      });
    });
  }

}
