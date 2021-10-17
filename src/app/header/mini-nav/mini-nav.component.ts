import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.scss']
})
export class MiniNavComponent implements OnInit {
  routeIndex = 0;
  isOpen = false;
  routes: string[] = [
    'Home',
    'Chat',
    'All',
    'Abc',
    'Home',
    'Chat',
    'All',
    'Abc', 'Home',
    'Chat',
    'All',
    'Abc', 'Home',
    'Chat',
    'All',
    'Abc', 'Home',
    'Chat',
    'All',
    'Abc', 'Home',
    'Chat',
    'All',
    'Abc',
  ];

  constructor() { }

  ngOnInit() {
  }

  public changeRoute(index: number) {
    console.log(index);
    this.routeIndex = index;
  }

  toggleDropdown() {
    console.log('toggleDropdown ' + this.isOpen);
    this.isOpen = !this.isOpen;
  }

}
