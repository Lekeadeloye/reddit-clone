import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "../../services/jsonPlaceholderApi";

const Homepage = () => {
  const { isLoading, error, data } = useGetPostsQuery();

  if (isLoading) {
    <p>Loading...</p>;
  }

  if (error) {
    <p>There has been an error</p>;
  }

  console.log(data);
  return (
    <>
      <h1>This is the Homepage!</h1>
      <div>
        {data?.map((post) => (
          <p>{post.title}</p>
        ))}
      </div>
    </>
  );
};

export default Homepage;
