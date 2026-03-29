import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

import { MenuIcon } from "lucide-react";

const MainMenu = () => {

  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <MenuIcon/>
        </DrawerTrigger>
        <DrawerContent>
          <Link to=''>
            Popular
          </Link>
            <Link to=''>
            Latest
          </Link>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MainMenu;
