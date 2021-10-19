import { Component, OnInit } from '@angular/core';
import { FeedSortingService } from '../home/feed-sorting.service';
import { SortingCriteria } from '../models/sorting-criteria.enum';

@Component({
  selector: 'app-feed-sorting-bar',
  templateUrl: './feed-sorting-bar.component.html',
  styleUrls: ['./feed-sorting-bar.component.scss']
})
export class FeedSortingBarComponent implements OnInit {
  sortingOptions : {
    name: SortingCriteria,
    icon: string,
  }[] = [
      { name: SortingCriteria.best, icon: 'fas fa-rocket' },
      { name: SortingCriteria.hot, icon: 'fas fa-fire-alt' },
      { name: SortingCriteria.new, icon: 'fas fa-certificate' },
      { name: SortingCriteria.rising, icon: 'fas fa-chart-line' },
    ];
  
  currentCriteria =
    { name: 'best', icon: 'fas fa-rocket' };
  
  
  constructor(private sortingService: FeedSortingService) {
   }

  ngOnInit() {
    
  }

  changeSortingCriteria(criteria: SortingCriteria) {
    this.currentCriteria = this.sortingOptions.find((opt) => {
      return opt.name === criteria;
    })!;

    this.sortingService.changeSortingCriteria(criteria);
  }

}
