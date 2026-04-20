import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useAppSelector } from "@/redux/hooks";
import {
  selectIsMenuSideBarOpen,
  selectIsSearchBarOpen,
} from "@/redux/selectors/uiSelectors";
import SearchBar from "@/features/search/components/Searchbar";
import SearchButton from "@/features/search/components/SearchButton";
import MenuSideBar from "./MenuSideBar";

const Root = () => {
  const isSearchBarOpen = useAppSelector(selectIsSearchBarOpen);
  const isMenuSideBarOpen = useAppSelector(selectIsMenuSideBarOpen);

  if (isSearchBarOpen) {
    return (
      <div className="w-full">
        <SearchBar />
      </div>
    );
  }
  return (
    <div className="w-full">
      <Header />
      <div className="pl-3 pr-3">
        {!isMenuSideBarOpen && <SearchButton />}
      </div>
      {isMenuSideBarOpen && <MenuSideBar />}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
