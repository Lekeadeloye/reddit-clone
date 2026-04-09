import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <section>
      <ArrowLeft onClick={() => navigate(-1)} />
      <Input placeholder="Find anything"/>
    </section>
  );
};

export default SearchBar
