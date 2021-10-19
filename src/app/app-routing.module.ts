import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path: 'subreddits/leaderboard/:category', component: LeaderboardComponent},
    {path: '', component: HomeComponent },
    {path: 'user/:nickname', component: UserComponent },
    {path: 'r/:subreddit/comments/:postId/:titleSlug', component: UserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}