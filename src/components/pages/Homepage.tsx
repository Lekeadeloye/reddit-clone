import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "../../services/jsonPlaceholderApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { RootState } from "@/redux/store";
import MenuSideBar from "../layout/MenuSideBar";
import SearchButton from "@/features/search/components/SearchButton";
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
  const isMenuSideBarOpen = useAppSelector(
    (state: RootState) => state.ui.isMenuSideBarOpen,
  );
  
  return (
    <>
      {isMenuSideBarOpen ? (
        <MenuSideBar />
      ) : (
        <>
          <SearchButton />
          <SortComboBox />
        </>
      )}
      <h1>This is the Homepage!</h1>

    </>
  );
};

export default Homepage;
