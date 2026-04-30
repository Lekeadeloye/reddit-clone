import type { PostContent as Content } from "./Post";

export const PostContent = ({ content }: { content: Content }) => {
  switch (content.type) {
    case "text":
      return <p className="h-auto w-full max-h-[300px]">{content.text}</p>;
    case "image":
      return (
        <img
          className="h-auto w-full max-h-[300px] object-contain  border rounded-2xl"
          src={content.url}
          alt="Image of reddit post content"
        />
      );
    case "video":
      return (
        <video
          className="h-auto w-full max-h-[300px] object-contain border"
          playsInline
        >
          <source src={content.url} type="video/mp4"></source>
        </video>
      );
    case "link":
      return (
        <a
          className="h-auto w-full max-h-[300px] text-sky-700 underline underline-offset-2"
          href={content.url}
          rel="noreferrer"
          target="_blank"
        >
          {content.url}
        </a>
      );
  }
};
