import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderActionsComponent } from './header/header-actions/header-actions.component';
import { OutlinedDirective } from './shared/outlined.directive';
import { MiniNavComponent } from './header/mini-nav/mini-nav.component';
import { CreatePostToolbarComponent } from './create-post-toolbar/create-post-toolbar.component';
import { FeedSortingBarComponent } from './feed-sorting-bar/feed-sorting-bar.component';
import { FeedComponent } from './feed/feed.component';
import { FeedPostComponent } from './feed/feed-post/feed-post.component';
import { TopCommunitiesComponent } from './top-communities/top-communities.component';

@NgModule({
  declarations: [					
    AppComponent,
    HeaderComponent,
    HeaderActionsComponent,
    OutlinedDirective,
    MiniNavComponent,
      CreatePostToolbarComponent,
      FeedSortingBarComponent,
    FeedComponent,
      FeedPostComponent,
      TopCommunitiesComponent
   ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
