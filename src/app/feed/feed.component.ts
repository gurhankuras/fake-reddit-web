import { Component, OnInit } from '@angular/core';
import { FeedSortingService } from '../home/feed-sorting.service';
import { Post } from '../models/post.model';
import { v4 } from 'uuid';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  constructor(private feedSortingService: FeedSortingService) { }

  ngOnInit() {
    this.posts = this.getBestPosts();
    this.feedSortingService.sortingChanged.subscribe((sorting) => {
      if (sorting === 'best') {
        this.posts = this.getBestPosts();
      }
      else {
        this.posts = [];
      }
    });
  }

    // TODO remove this function once you implemented related http calls
  private getBestPosts() {
    return [
      {
        by: 'BullshitGaming',
        commentCount: 11,
        createdAt: new Date(),
        netVotes: 4,
        subreddit: { avatar: '', name: 'EnglishLearning' },
        text: "I noticed my natives in social media say ideology instead of political orientation and religion , so what\'s thedifference?",
        title: "What's the difference between ideology and political orientation",
        id: randomId(),
      },
      {
        by: 'BullshitGaming',
        commentCount: 11,
        createdAt: new Date(Date.now() - 60 * 1000),
        netVotes: 4,
        subreddit: { avatar: '', name: 'EnglishLearning' },
        text: "I noticed my natives in social media say ideology instead of political orientation and religion , so what\'s thedifference?",
        title: "What's the difference between ideology and political orientation",
        id: randomId(),
     
      }
      , {
        by: 'BullshitGaming',
        commentCount: 11,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        netVotes: 4,
        subreddit: { avatar: '', name: 'EnglishLearning' },
        text: "I noticed my natives in social media say ideology instead of political orientation and religion , so what\'s thedifference?",
        title: "What's the difference between ideology and political orientation",
        id: randomId(),

      }, {
        by: 'BullshitGaming',
        commentCount: 11,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        netVotes: 4,
        subreddit: { avatar: '', name: 'EnglishLearning' },
        text: "I noticed my natives in social media say ideology instead of political orientation and religion , so what\'s thedifference?",
        title: "What's the difference between ideology and political orientation",
        id: randomId(),

      }, {
        by: 'BullshitGamindd',
        commentCount: 11,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000 * 5),
        netVotes: 4,
        subreddit: { avatar: '', name: 'EnglishLearning' },
        text: "I noticed my natives in social media say ideology instead of political orientation and religion , so what\'s thedifference?",
        title: "What's the difference between ideology and political orientation",

        id: randomId(),

      }
    ];
    }
}


function randomId() {
  return v4().split('-')[0];
}
