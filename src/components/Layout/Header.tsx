import { Menu, MenuIcon, SquarePlus, Bell } from "lucide-react";
import MainMenu from "./MainMenu";

const Header = () => {
  return (
    <>
      <section className="flex items-center w-full p-4 gap-4 border-b">
        {/* <MenuIcon /> */}
        <MainMenu/>
        <h1 className="mr-auto text-2xl text-orange-600 font-bold justify-center">reddit</h1>
        <SquarePlus/>
        <Bell/>
      </section>
    </>
  );
};

export default Header;
