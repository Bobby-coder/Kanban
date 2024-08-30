import { SearchIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateFilteredItems } from "../store/features/todo/todoSlice";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  // handler to search tasks based on specified input
  function handleSearch(text) {
    setSearchInput(text);
    dispatch(updateFilteredItems(text));
  }

  return (
    <div className="relative md:flex flex-1 w-full md:max-w-md">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full py-2 pr-3 pl-10 rounded-md text-black flex h-10 border border-input bg-background px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
