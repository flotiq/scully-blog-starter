import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import {Observable, of} from 'rxjs';
import {BlogpostList, ContentBlogPostService} from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentBlogPostService
  ) { }

  getBlogPosts(page): Observable<BlogpostList> {
    return this.transferState.useScullyTransferState(
      'blogposts' + page,
      this.flotiqService.listBlogpost(page, 8, 'internal.createdAt', 'desc')
    );
  }
}
