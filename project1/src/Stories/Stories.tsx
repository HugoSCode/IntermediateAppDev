import StoryCard from "./StoryCard.tsx";
import { Input } from "../components/ui/input.tsx";
import { SearchStories } from "./SearchStories.jsx";

const Stories = () => {
  return (
    <>
     <SearchStories/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15 p-6">
        <div>
          <h1 className="font-bold">Top stories</h1>
          <StoryCard storyType="topstories" />
        </div>
        <div>
          <h1 className="font-bold">Ask stories</h1>
          <StoryCard storyType="askstories" />
        </div>
        <div>
          <h1 className="font-bold">Best stories</h1>
          <StoryCard storyType="beststories" />
        </div>
        <div>
          <h1 className="font-bold">New stories</h1>
          <StoryCard storyType="newstories" />
        </div>
        <div>
          <h1 className="font-bold">Show stories</h1>
          <StoryCard storyType="showstories" />
        </div>
        <div>
          <h1 className="font-bold">Job stories</h1>
          <StoryCard storyType="jobstories" />
        </div>
      </div>
    </>
  );
};

export default Stories;
