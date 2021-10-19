import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { SortingCriteria } from '../models/sorting-criteria.enum';
import { FeedServiceService } from './feed-service.service';

@Injectable({
  providedIn: 'root'
})
export class FeedSortingService implements OnDestroy {
  sortingChanged = new Subject<SortingCriteria>();

  constructor() {
  
  }
  changeSortingCriteria(criteria: SortingCriteria) {
    this.sortingChanged.next(criteria);
  }

  ngOnDestroy() {
    this.sortingChanged.unsubscribe();
  }

}

