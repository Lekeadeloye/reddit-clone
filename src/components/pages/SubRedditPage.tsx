import { useGetPostsBySubRedditQuery } from "@/services/postsApi";
import { useParams } from "react-router-dom";

const SubRedditPage = () => {
  const { subReddit } = useParams();

  console.log("SubReddit:", subReddit);
  return <>this is the SubReddit page</>;
};

export default SubRedditPage;
