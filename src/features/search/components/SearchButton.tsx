import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

const SearchButton = () => {
  return (
    <>
      <Button className="relative bg-white border-orange-500 w-full p-5 rounded-full">
        <FontAwesomeIcon icon={faRedditAlien} className="absolute left-2 bg-orange-600 rounded-full text-3xl  "/>
        <p className="text-gray-400">Find anything</p>
      </Button>
    </>
  );
};

export default SearchButton;
