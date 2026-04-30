export type PostContent =
  | { type: "text"; text: string }
  | { type: "image"; url: string }
  | { type: "video"; url: string }
  | { type: "link"; url: string };

export type Post = {
  author: string;
  community?: string;
  timeStamp: number;
  postTitle: string;
  upVoteCount: number;
  downVoteCount: number;
  commentCount: number;
  shareCount?: number;
  id: string;
  subRedditName: string;
  thumbnail: string;
  content: PostContent;
};
