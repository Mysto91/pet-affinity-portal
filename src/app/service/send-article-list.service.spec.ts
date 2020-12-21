import { TestBed } from '@angular/core/testing';

import { SendArticleListService } from './send-article-list.service';

describe('SendArticleListService', () => {
  let service: SendArticleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendArticleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
