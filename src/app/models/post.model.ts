export interface Post {
  text: string;
  id: string;
    title: string;
    netVotes: number;
    commentCount: number;
    subreddit: { name: string, avatar: string };
    by: string;
    createdAt: Date;
  }