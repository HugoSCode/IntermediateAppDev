import { IndividualLeaderCard } from "./IndividualLeaderCard.jsx";
import React, { useState, useEffect, use } from "react";
import { Input } from "../components/ui/input.tsx";
import { useAllCachedLeaders } from "./CacheLeader.js";

export function SearchLeaders() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const allLeaders=useAllCachedLeaders();
  useEffect(() => {
    if (allLeaders) {

      const filteredItems = allLeaders.filter(
        (item) =>
          item.id.toLowerCase().includes(query.toLowerCase()) 
      );
      setItems(filteredItems);
    }
  }, [query]);

  return (
    <>
      <Input
        placeholder="Search for leaders by title or type"
        className="m-4 w-1/2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      {query && (
        <div className=" overflow-y-auto border-2 border-blue-100 rounded-lg  bg-gray-300 drop-shadow-2xl">
          {items.length===0 && <div className="flex-1 p-4 h-30 font-medium">No results found</div>}
          {items.map((item) => (
            <div className=" p-4 ">
              <IndividualLeaderCard leader={item} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
