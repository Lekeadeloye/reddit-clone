import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowBigUp, ArrowBigDown, MessageCircle, Mail } from "lucide-react";

interface PostCardProps {
  author: string;
  community: string;
  timeStamp: string;
  postTitle: string;
  upVoteCount: number;
  downVoteCount: number;
  commentCount: number;
  shareCount: number;
}

const PostCard = ({
  author,
  community,
  timeStamp,
  postTitle,
  upVoteCount,
  downVoteCount,
  commentCount,
  shareCount,
}: PostCardProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <div>
            {author}
            {community}
            {timeStamp}
          </div>
          <CardTitle>{postTitle}</CardTitle>
          <CardAction>
            <Button>
              Join
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>

        </CardContent>
        <CardFooter>
          <Button>
            <ArrowBigUp />
            {upVoteCount}
            <ArrowBigDown />
          </Button>
          <Button>
            <MessageCircle />
            {commentCount}
          </Button>
          <Button>
            <Mail />
            {shareCount}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
