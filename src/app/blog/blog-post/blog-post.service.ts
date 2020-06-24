import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {BlogpostList, ContentBlogPostService} from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentBlogPostService
  ) { }

  getBlogPost(slug): Observable<BlogpostList> {
    return this.transferState.useScullyTransferState(
      slug,
      this.flotiqService.listBlogpost(
        1,
        1,
        'id',
        'asc',
        0,
        '{"slug":{"type":"equals","filter":"' + slug + '"}}'
      )
    );
  }
}
