import {Component, OnInit} from '@angular/core';
import {ContentBlogPostService, Blogpost, Media, ContentMediaService} from 'flotiq';
import {ActivatedRoute, Params} from '@angular/router';
import {BlogPostService} from './blog-post.service';
import {ImageService} from '../image.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  blogPost: Blogpost;
  slug: string;
  image: Media;

  constructor(
    private flotiqService: ContentBlogPostService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private blogpostService: BlogPostService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.blogpostService.getBlogPost(this.slug).subscribe((blogPost) => {
        this.blogPost = blogPost.data[0];
        console.log(blogPost);
        if (this.blogPost.headerImage && this.blogPost.headerImage[0]) {
          this.imageService.getImage(this.blogPost.headerImage[0].dataUrl.split('/')[5]).subscribe((image) => {
            this.image = image;
          });
        }
      });
    });
  }

}
