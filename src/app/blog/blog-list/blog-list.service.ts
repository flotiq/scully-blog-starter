import { Injectable } from '@angular/core';
import { TransferStateService, isScullyGenerated } from '@scullyio/ng-lib';
import {Observable, of} from 'rxjs';
import {BlogpostList, ContentBlogPostService} from 'flotiq';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentBlogPostService
  ) { }

  getBlogPosts(page): Observable<BlogpostList> {
    // if (this.transferState.stateHasKey('blogposts' + page)) {
    //   return this.transferState.getState<BlogpostList>('blogposts' + page);
    // }
    // return this.flotiqService.listBlogpost(page, 8, 'internal.createdAt', 'desc')
    //   .pipe(tap(data => this.transferState.setState<BlogpostList>('blogposts' + page, data)));
    return this.transferState.useScullyTransferState(
      'blogposts' + page,
      this.flotiqService.listBlogpost(page, 8, 'internal.createdAt', 'desc')
    );
  }
}
