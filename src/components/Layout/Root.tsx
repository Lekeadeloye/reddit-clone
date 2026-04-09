import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import MenuSideBar from "./MenuSideBar";
import SearchButton from "@/features/search/components/SearchButton";
import SortComboBox from "@/features/search/components/SortComboBox";

const Root = () => {
  
  const [isMenuSideBarOpen, setIsMenuSideBarOpen] = useState(false);
  interface MenuSideBarProps {
    isOpen: boolean;
    setIsMenuOpen: () => void;
  }

  return (
    <div className="w-full">
      <Header setIsMenuSideBarOpen={setIsMenuSideBarOpen} />
      {isMenuSideBarOpen ? (
        <MenuSideBar />
      ) : (
        <>
          <SearchButton />
          <SortComboBox />
        </>
      )}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
