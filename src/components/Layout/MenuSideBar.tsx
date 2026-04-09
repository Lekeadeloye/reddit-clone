import {
  ClockArrowUpIcon,
  PlusIcon,
  CircleArrowOutUpRight,
  LayoutGridIcon,
  House,
} from "lucide-react";
import { Link } from "react-router-dom";

const MenuSideBar = () => {
  return (
    <section className="w-64 space-y-2 p-4">
      <Link to="/" className="flex gap-2">
        <House />
        Home
      </Link>
      <Link to="" className="flex gap-2">
        <CircleArrowOutUpRight />
        Popular
      </Link>
      <Link to="" className="flex gap-2">
        <ClockArrowUpIcon />
        News
      </Link>
      <Link to="" className="flex gap-2">
        <LayoutGridIcon />
        Explore
      </Link>
      <Link to="" className="flex gap-2">
        <PlusIcon />
        Chat
      </Link>
      <Link to="" className="flex gap-2">
        <PlusIcon />
        Start a community
      </Link>
      <hr />
      Games on Reddit
      <hr />
      Custom Feeds
      <Link to="" className="flex gap-2">
        <PlusIcon />
        Create Custom Feed
      </Link>
      <hr />

    </section>
  );
};

export default MenuSideBar;
