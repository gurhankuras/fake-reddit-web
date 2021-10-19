/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeedSortingService } from './feed-sorting.service';

describe('Service: FeedSorting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedSortingService]
    });
  });

  it('should ...', inject([FeedSortingService], (service: FeedSortingService) => {
    expect(service).toBeTruthy();
  }));
});
