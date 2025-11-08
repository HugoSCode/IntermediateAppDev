import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
  } from "../components/ui/card.tsx";
  import {StoryText} from "../Stories/StoryText"
  import AddFavourite from "../Favourites/AddFavourite.tsx";
import { useEffect, useState } from "react";
import { karmaBadge } from "../utils/Badges.js";

export const IndividualLeaderCard=(leader)=>{
    leader=leader.leader
    const [badge, setBadge]=useState("");
    useEffect(()=>{
      if(leader){
        setBadge(karmaBadge(leader.karma));
      }
    }, [leader])
    const convertTime=(unixTime)=>{
        const unixTimestamp = unixTime; // Example Unix timestamp
        const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
        return date.toDateString();
      }

return(
    <Card className="hover:scale-105 hover:bg-blue-950 hover:cursor-pointer">
    <CardHeader>
      <CardTitle>{leader.id} <AddFavourite story={leader} /></CardTitle>
      <CardDescription></CardDescription>
    </CardHeader>
    <CardContent>
     {badge} | Karma: {leader.karma}
      <br></br>
      Created: {convertTime(leader.created)}
      <br></br>
        <StoryText text={leader.about}/>
    </CardContent>
    <CardFooter>
      <a
        href={`https://news.ycombinator.com/user?id=${leader.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View profile on Hacker News
      </a>
    </CardFooter>
  </Card>
)
}