import Spinner from "../utils/spinner.tsx";
import { useCacheStories } from "./CacheStories.js";
import { IndividualCard } from "./IndividualCard.jsx";
import { useState, useEffect } from "react";
import { sortStories } from "../utils/sortBy.js";
import { sortByDropdown } from "../utils/sortByDropdown.jsx";
import { Paginate} from "../utils/Paginate.jsx";

function StoryCard({ storyType }) {
  const [sortField, setSortField] = useState("time");
  const { data, isLoading, isError } = useCacheStories(storyType);
  const [isAscending, setIsAscending] = useState(true);
  const [stories, setStories] = useState([]);
  const [type, setType] = useState("stories");


  useEffect(() => {
    if (data) {
      setStories(sortStories(sortField, data, isAscending));
    }
  }, [sortField, isAscending, data]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>Error loading stories.</div>;
  }

  return (
    <div>
      <div className="h-100 overflow-y-scroll scrollbar-none border-2 border-blue-100 rounded-lg  bg-gray-300 drop-shadow-2xl p-5 dark:bg-red-800 dark:border-black">
        {sortByDropdown(
          isAscending,
          sortField,
          setSortField,
          setIsAscending,
          type
        )}
      <Paginate items={stories} itemsPerPage={5} type={"stories"}/> 
      </div>
    </div>
  );
}

export default StoryCard;
