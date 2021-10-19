import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter} from 'rxjs/operators';
@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.scss']
})
export class MiniNavComponent implements OnInit {
  routeIndex = 0;
  isOpen = false;
  currentRouteInfo: {icon: string, name: string} = { icon: 'fa-home', name: 'Home' };
  routes: string[] = [];


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((navEvent) => {
        const url = (<NavigationEnd>navEvent).url;
        this.currentRouteInfo = this.resolveUrl(url);
      });
  }

  resolveUrl(url: string) {
    if (url === '/') {
      return { icon: 'fas fa-home', name: 'Home' };
    }
    else if (url.startsWith('/subreddits/leaderboard')) {
      return { icon: 'fas fa-list-ol', name: 'Top Communities' };
    }
    return { icon: 'fas fa-home', name: 'Not Found' };
  }

  public changeRoute(index: number) {
    console.log(index);
    // this.routeIndex = index;
  }

  toggleDropdown() {
    // console.log('toggleDropdown ' + this.isOpen);
    // this.isOpen = !this.isOpen;
  }

}
