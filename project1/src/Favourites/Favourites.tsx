
import {getFavourites} from "./Cachefavs.js";
import Spinner from '../utils/spinner.js';
import {IndividualCard} from "../Stories/IndividualCard.jsx"
import {IndividualLeaderCard} from "../Leaders/IndividualLeaderCard.jsx"
import { useEffect } from "react";
import KarmaBarChart from "../Leaders/KarmaGraph.jsx"
const Favourites = () => {


const favs=getFavourites();


function storyOrLeader(fav){
  console.log(fav);
  const keys=Object.keys(fav);
  for (const key of keys){
    if(key==='karma'){
      return<IndividualLeaderCard leader={fav}/>
    }
  }
    return <IndividualCard story={fav}/>  
}

if(favs===null || favs.length===0){

  return (
    <>
        <KarmaBarChart />

  <div className="p-4 h-30 font-medium">No favourites found</div>
    </>

)
}
  return (
    <>

    {favs.map((fav)=>(
       <div key={fav.story.id} className="mb-4 p-4  bg-white">
          {storyOrLeader(fav.story)}
       </div>

    ))}
    </>
  )
}

export default Favourites