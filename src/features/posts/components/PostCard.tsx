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

interface PostCardProps {
  author: string;
  community?: string;
  timeStamp: string;
  postTitle: string;
  upVoteCount: number;
  downVoteCount: number;
  commentCount: number;
  shareCount?: number;
  id: string;
  subRedditName: string;
  thumbnail: string
}

const PostCard = ({
  author,
  // community,
  subRedditName,
  timeStamp,
  postTitle,
  upVoteCount,
  downVoteCount,
  // id,
  thumbnail,
  commentCount,
  shareCount,
  content
}: PostCardProps) => {
  return (
    <>
      <Card className="rounded-none">
        <CardHeader>
          <div>
            {/* {author} */}
            {subRedditName}
            {timeStamp}
          </div>
          <CardTitle>{postTitle}</CardTitle>
          <CardAction>
            <Ellipsis />
          </CardAction>
        </CardHeader>
        <CardContent >
          {/* <img src={thumbnail} alt="" />
          {thumbnail} */}
          <PostContent content={content}/>
        </CardContent>
        <CardFooter className="border-none bg-white gap-2 p-1.5 pl-3">
          <Button className="bg-gray-500 rounded-2xl p-4">
            <ArrowBigUp />
            {upVoteCount}
            <ArrowBigDown />
            {downVoteCount > 0 && downVoteCount}
          </Button>
          <Button className="bg-gray-500 rounded-2xl ">
            <MessageCircle />
            {commentCount}
          </Button>
          <Button className="bg-gray-500 rounded-2xl">
            <Forward />
            {shareCount}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
