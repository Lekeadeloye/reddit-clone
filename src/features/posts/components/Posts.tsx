import { formatEpochSecondsAsDate } from "@/utils";
import PostCard from "./PostCard";

const Posts = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There has been an error</p>;
  }

  const posts = data.posts.map((post) => {
    const {
      id,
      title,
      author,
      ups,
      downs,
      num_comments,
      subreddit_name_prefixed,
      subreddit,
      created,
      thumbnail,
    } = post;

    // Video
    if (post.is_video && post.media?.reddit_video?.fallback_url) {
      return {
        id,
        postTitle: title,
        author,
        upVoteCount: ups,
        downVoteCount: downs,
        commentCount: num_comments,
        subRedditName: subreddit_name_prefixed,
        subreddit,
        timeStamp: formatEpochSecondsAsDate(created),
        thumbnail,
        content: {
          type: "video",
          url: post.media.reddit_video.fallback_url,
        },
      };
    }

    // Image
    if (post.post_hint === "image") {
      return {
        id,
        postTitle: title,
        author,
        upVoteCount: ups,
        downVoteCount: downs,
        commentCount: num_comments,
        subRedditName: subreddit_name_prefixed,
        subreddit,
        timeStamp: formatEpochSecondsAsDate(created),
        thumbnail,
        content: {
          type: "image",
          url: post.url,
        },
      };
    }

    // Text
    if (post.selftext) {
      return {
        id,
        postTitle: title,
        author,
        upVoteCount: ups,
        downVoteCount: downs,
        commentCount: num_comments,
        subRedditName: subreddit_name_prefixed,
        subreddit,
        timeStamp: formatEpochSecondsAsDate(created),
        thumbnail,
        content: {
          type: "text",
          text: post.selftext,
        },
      };
    }

    // Fallback (Link)

    return {
      id,
      postTitle: title,
      author,
      upVoteCount: ups,
      downVoteCount: downs,
      commentCount: num_comments,
      subRedditName: subreddit_name_prefixed,
      subreddit,
      timeStamp: formatEpochSecondsAsDate(created),
      thumbnail,
      content: {
        type: "link",
        url: post.url,
      },
    };
  });

  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  );
};

export default Posts;
