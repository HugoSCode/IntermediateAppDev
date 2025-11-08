import Spinner from "../utils/spinner.tsx";
import { cacheLeaders } from "./CacheLeader";
import { IndividualLeaderCard } from "./IndividualLeaderCard.jsx";
import { sortStories } from "../utils/sortBy.js";
import { sortByDropdown } from "../utils/sortByDropdown.jsx";
import { useState, useEffect } from "react";
import {SearchLeaders} from "./SearchLeaders.jsx"
import KarmaBarChart from "./KarmaGraph.jsx"
import { Paginate} from "../utils/Paginate.jsx";
const Leaders = ({ dark }) => {
  const { data, isLoading, isError } = cacheLeaders();
  const [sortField, setSortField] = useState("karma");
  const [isAscending, setIsAscending] = useState(true);
  const [leaders, setLeaders] = useState([]);
  const [visibleLeaders, setVisibleLeaders]=useState(20);
  const [type, setType]=useState("leaders");

  useEffect(() => {
    if (data) {
      setLeaders(sortStories(sortField, data, isAscending));
    }
  }, [sortField, isAscending, data]);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return console.log("error");
  }
  return (
    <div>
      <SearchLeaders/>
      <KarmaBarChart dark={dark}/>
      {sortByDropdown(isAscending, sortField, setSortField, setIsAscending, type)}
      <Paginate items={leaders} itemsPerPage={10} type={"leaders"}/> //Paginated list of leaders
    </div>
  );
};
export default Leaders;
