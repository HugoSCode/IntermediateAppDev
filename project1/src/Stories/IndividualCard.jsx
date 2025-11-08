import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
  } from "../components/ui/card.tsx";
  import AddFavourite from "../Favourites/AddFavourite.tsx";
  import { StoryText } from "./StoryText.jsx";
  import { storyBadge, storyTypeBadge } from "../utils/Badges.js";
  import { useState, useEffect, useLayoutEffect} from "react";
  
  
export const IndividualCard=({story})=>{

    const [scoreBadge,setScoreBadge]=useState("");
    const [typeBadge, setTypeBadge]=useState("");
    useEffect(()=>{
      if(story){
        setScoreBadge(storyBadge(story.score));
        setTypeBadge(storyTypeBadge(story.type));
      }
    },[story])
    return(
        <Card className="hover:scale-105 hover:bg-blue-950 hover:cursor-pointer" >
        <CardHeader>
          <CardTitle> {story.title} <AddFavourite story={story} /> <br/><p className="text-sm">{scoreBadge} | Score: {story.score} <br/>{typeBadge}{story.type}</p></CardTitle>
          <CardDescription>
            By {story.by} | {new Date(story.time * 1000).toLocaleString()}
          </CardDescription>
        </CardHeader>
        <CardContent><StoryText text={story.text}/> </CardContent>
        <CardFooter>
          
          <a
            href={`https://news.ycombinator.com/item?id=${story.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-100 underline"
          >
            View on Hacker News
          </a>
        </CardFooter>
      </Card>
    )
}