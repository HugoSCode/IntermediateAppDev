import { fetchStoryIds, fetchStories } from "./FetchStories.js";
import { useQuery, useQueryClient } from "@tanstack/react-query";

//Caches stories so they persist when switchign tabs
export function useCacheStories(storyType) {
    return useQuery({
        queryKey: ['stories', storyType],
        queryFn:async()=>{
            const storyIds = await fetchStoryIds(storyType);
            const stories = await fetchStories(storyIds, 0, 10, storyType); //0, 10 defines how many stories are returned
            return stories;
        },
    });
}


//Collects all cached stories for use in search bar
export function useAllCachedStories(types = [
  'topstories',
  'newstories',
  'beststories',
  'askstories',
  'showstories',
  'jobstories'
]) {
  const queryClient = useQueryClient();

  //flatMap to combine arrays from different story types into one array
  const cachedStories = types.flatMap(type => {
    const data = queryClient.getQueryData(['stories', type]);
    return data || [];
  });

  return cachedStories;
}

