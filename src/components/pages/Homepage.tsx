import Posts from "@/features/posts/components/Posts";
import SortComboBox from "@/features/search/components/SortComboBox";
import { useGetPostsBySortQuery } from "@/services/postsApi";
import { useAppSelector } from "@/redux/hooks";
import { selectSortByValue } from "@/redux/selectors/uiSelectors";


const Homepage = () => {
  ;
  const sortByValue = useAppSelector(selectSortByValue)
  const { isLoading, error, data } = useGetPostsBySortQuery(sortByValue);

  return (
    <>
      <div className="mt-3 p-1">
        <SortComboBox />
      </div>
      <Posts isLoading={isLoading} error={error} data={data} />
    </>
  );
};

export default Homepage;
