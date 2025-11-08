export function cacheFavourites(story) {
  const existing = JSON.parse(localStorage.getItem("favourites")) || [];
  
  const favourites = [story, ...existing];

  localStorage.setItem("favourites", JSON.stringify(favourites));
  return favourites;
}

export function removeFavourite(story){
    const existing = JSON.parse(localStorage.getItem("favourites")) || [];

    //filter out the story that matches the id
    const newFavourites=existing.filter(fav=>fav.story.id!==story.story.id);
    //clear all stories to get rid of removed one
    localStorage.clear("favourites");
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    return newFavourites
}

export function getFavourites(){
  const favourites=JSON.parse(localStorage.getItem("favourites"));
  return favourites;
}