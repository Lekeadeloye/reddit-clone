import { Input } from "@/components/ui/input";
import { toggleSearchBar } from "@/features/ui/uiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ArrowLeft } from "lucide-react";

const SearchBar = () => {
  const dispatch = useAppDispatch()

  return (
    <section className="flex p-3.5 items-center gap-3 border-b">
      <ArrowLeft onClick={() => dispatch(toggleSearchBar())} />
      <Input autoFocus className="border-2 border-blue-300 rounded-3xl p-5" placeholder="Find anything"/>
    </section>
  );
};

export default SearchBar
