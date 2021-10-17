import { Component, OnInit } from '@angular/core';

interface Action {
  name: string;
  class: string;
  iconStyle: string;
}

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent implements OnInit {
  actions: Action[] = [
    {
      name: 'Popular',
      class: 'fa-arrow-alt-circle-up',
      iconStyle: 'far',
    },
    {
      name: 'All',
      class: 'fa-dot-circle',
      iconStyle: 'fas',
    },
    {
      name: 'Reddit Live',
      class: 'fa-video',
      iconStyle: 'fas',
    },
  ];

  actions2 : Action[] = [
    {
      name: 'Chat',
      class: 'fa-comment',
      iconStyle: 'far',
    },
    {
      name: 'Notifications',
      class: 'fa-bell',
      iconStyle: 'far',
    },
    {
      name: 'Create Post',
      class: 'fa-plus',
      iconStyle: 'fas',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
