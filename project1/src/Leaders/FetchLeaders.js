import {leaders} from "./leadUsers.js";


export const fetchLeader=async()=>{
const leaderReqs=leaders.map((leaders)=>
fetch(`https://hacker-news.firebaseio.com/v0/user/${leaders.user}.json?print=pretty`)
.then((res)=>res.json())
);
return Promise.all(leaderReqs);
};