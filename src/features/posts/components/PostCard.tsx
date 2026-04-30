import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowBigUp,
  ArrowBigDown,
  MessageCircle,
  Forward,
  Ellipsis,
} from "lucide-react";
import { PostContent } from "./PostContent";
import { Link } from "react-router-dom";
import type { PostContent as Content } from "./Post";
import { useTimeAgo } from "@/hooks/useTimeAgo";

interface PostCardProps {
  author?: string;
  community?: string;
  timeStamp: number;
  postTitle: string;
  upVoteCount: number;
  downVoteCount: number;
  commentCount: number;
  shareCount?: number;
  id: string;
  subRedditName: string;
  subreddit: string;
  thumbnail?: string;
  content: Content;
}

const PostCard = ({
  subreddit,
  timeStamp,
  postTitle,
  upVoteCount,
  downVoteCount,
  id,
  commentCount,
  shareCount,
  content,
}: PostCardProps) => {
  const timeAgo = useTimeAgo(timeStamp);
  const postPath = `/post/${subreddit}/${id}`;
  const subredditPath = `/${subreddit}`;

  return (
    <Card className="rounded-none">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            className="font-medium text-foreground hover:underline"
            to={subredditPath}
          >
            {`r/${subreddit}`}
          </Link>
          <span>{timeAgo}</span>
        </div>
        <Link className="block" to={postPath}>
          <CardTitle>{postTitle}</CardTitle>
        </Link>
        <CardAction>
          <Button size="icon" type="button" variant="ghost">
            <Ellipsis />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        {content.type === "link" ? (
          <PostContent content={content} />
        ) : (
          <Link className="block" to={postPath}>
            <PostContent content={content} />
          </Link>
        )}
      </CardContent>
      <CardFooter className="border-none bg-white gap-2 p-1.5 pl-3">
        <Button className="bg-gray-500 rounded-2xl p-4" type="button">
          <ArrowBigUp />
          {upVoteCount}
          <ArrowBigDown />
          {downVoteCount > 0 && downVoteCount}
        </Button>
        <Button className="bg-gray-500 rounded-2xl " type="button">
          <MessageCircle />
          {commentCount}
        </Button>
        <Button className="bg-gray-500 rounded-2xl" type="button">
          <Forward />
          {shareCount}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
