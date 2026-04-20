import { MenuIcon, SquarePlus, Bell } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { toggleMenuSideBar } from "@/features/ui/uiSlice";

const Header = () => {
  const dispatch = useAppDispatch()
  
  return (
    <>
      <section className="flex items-center w-full p-4 gap-4">
        <MenuIcon onClick={() => dispatch(toggleMenuSideBar())} />
        <h1 className="mr-auto text-2xl text-orange-600 font-bold justify-center">
          reddit
        </h1>
        <SquarePlus />
        <Bell />
      </section>
    </>
  );
};

export default Header;
