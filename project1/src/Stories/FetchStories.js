export const fetchStoryIds = async (storyType) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${storyType}.json?print=pretty`,
  );
  const data = await res.json();
  return data; 
};

export const fetchStories = async (storyIds, startNum, endNum, storyType) => {
  const storyRequests = storyIds.slice(startNum, endNum).map((id) =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((res) => res.json())
  );
  const stories= await Promise.all(storyRequests);
  //Add the type field so cna display badge colors 
  const updatedStories=stories.map(story=>({
    ...story,
    type: storyType
  }));
  return updatedStories;
};

