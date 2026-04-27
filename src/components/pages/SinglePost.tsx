import PostCard from "@/features/posts/components/PostCard";
import { useParams } from "react-router-dom";
import {
  useGetPostsQuery,
  useGetPostBySubRedditAndIdQuery,
} from "@/services/postsApi";
import { formatEpochSecondsAsDate } from "@/utils";

const SinglePost = () => {
  const { postId, subReddit } = useParams();
  const { isLoading, error, data } = useGetPostBySubRedditAndIdQuery(
    {
      subreddit: subReddit,
      id: postId,
    },
    {
      skip: !subReddit || !postId,
    },
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading post</p>;
  if (!data?.post) return <p>No posts found</p>;

  // const post = data.posts.find((el) => el.id === postId);
  const post = data.post
  const comments = data.comments
  console.log('Post:', post, 'Comments:', comments)

  if (!post) return <p>Post Not Found</p>;

  // Transform post to match PostCardProps
  const {
    id,
    title,
    author,
    ups,
    downs,
    num_comments,
    subreddit_name_prefixed,
    created,
    thumbnail,
    subreddit: postSubreddit,
  } = post;

  let content;
  // Video
  if (post.is_video && post.media?.reddit_video?.fallback_url) {
    content = {
      type: "video",
      url: post.media.reddit_video.fallback_url,
    };
  }
  // Image
  else if (post.post_hint === "image") {
    content = {
      type: "image",
      url: post.url,
    };
  }
  // Text
  else if (post.selftext) {
    content = {
      type: "text",
      text: post.selftext,
    };
  }
  // Fallback (Link)
  else {
    content = {
      type: "link",
      url: post.url,
    };
  }

  const postCardProps = {
    id,
    postTitle: title,
    author,
    subreddit: postSubreddit,
    subRedditName: subreddit_name_prefixed,
    timeStamp: formatEpochSecondsAsDate(created),
    thumbnail,
    upVoteCount: ups,
    downVoteCount: downs,
    commentCount: num_comments,
    shareCount: 0,
    content,
  };

  return <PostCard {...postCardProps} />;
  // TODO create comments Card that appends to PostCard
};

export default SinglePost;
