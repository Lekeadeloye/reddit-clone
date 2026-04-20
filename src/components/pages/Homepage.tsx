import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "../../services/jsonPlaceholderApi";
import SortComboBox from "@/features/search/components/SortComboBox";

const Homepage = () => {
  // const { isLoading, error, data } = useGetPostsQuery();

  // if (isLoading) {
  //   <p>Loading...</p>;
  // }

  // if (error) {
  //   <p>There has been an error</p>;
  // }

  // console.log(data);
  return (
    <>
      <SortComboBox />
      <h1>This is the Homepage!</h1>
    </>
  );
};

export default Homepage;
