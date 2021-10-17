import { Component, OnInit } from '@angular/core';
import {faCommentDots } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // faCoffee = faCoffee;
  faCommentDots = faCommentDots;
  constructor() { }

  ngOnInit() {
  }

}
