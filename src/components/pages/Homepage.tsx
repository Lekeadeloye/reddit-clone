// import {
//   useGetPostsQuery,
//   useCreatePostsMutation,
// } from "../../services/jsonPlaceholderApi";
import Posts from "@/features/posts/components/Posts";
import SortComboBox from "@/features/search/components/SortComboBox";
import { useGetPostsQuery, useGetPostsBySortQuery } from "@/services/postsApi";
import { useAppSelector } from "@/redux/hooks";
import { selectSortByValue } from "@/redux/selectors/uiSelectors";


const Homepage = () => {
  // const { isLoading, error, data } = useGetPostsQuery();

  // if (isLoading) {
  //   <p>Loading...</p>;
  // }

  // if (error) {
  //   <p>There has been an error</p>;
  // }

  // console.log(data);
  const sortByValue = useAppSelector(selectSortByValue)
  const { isLoading, error, data } = useGetPostsBySortQuery(sortByValue);

  return (
    <>
      <div className="mt-3 p-1">
        <SortComboBox />
      </div>
      {/* <h1>This is the Homepage!</h1> */}
      <Posts isLoading={isLoading} error={error} data={data} />
    </>
  );
};

export default Homepage;
