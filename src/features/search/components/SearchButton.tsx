import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { toggleSearchBar } from "@/features/ui/uiSlice";

const SearchButton = () => {

  const dispatch = useAppDispatch()
  return (
    <>
      <Button className="relative bg-white border-orange-500 w-full p-5 rounded-full" onClick={() => dispatch(toggleSearchBar())}>
        <FontAwesomeIcon icon={faRedditAlien} className="absolute left-2 bg-orange-600 rounded-full text-3xl  "/>
        <p className="text-gray-400">Find anything</p>
      </Button>
    </>
  );
};

export default SearchButton;
