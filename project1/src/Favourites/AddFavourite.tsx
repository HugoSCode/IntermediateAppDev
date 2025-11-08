import React, { useEffect } from "react";
import { useState } from "react";
import { cacheFavourites, removeFavourite, getFavourites } from "./CacheFavs.js";

let favs = [];

const AddFavourite = (story) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    let favourites = getFavourites();
    if (favourites) {
      for (const i of favourites) {
        if (i.story.id === story.story.id) {
          setIsFav(true);
          break;
        }
      }
    }
  }, [story]);

  function setFav() {
    if (!isFav) {
      setIsFav(true);
      favs = cacheFavourites(story);
    } else {
      setIsFav(false);
      favs = removeFavourite(story);
    }
  }

  return (
    <button className="cursor-pointer hover:scale-115" onClick={setFav}>
      {isFav ? "❤️" : "🤍"}
    </button>
  );
};

export { favs };

export default AddFavourite;
