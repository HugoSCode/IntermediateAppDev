export const sortStories=(sortField, data, isAscending)=>{
    if(isAscending){
     const sorted=[...data].sort((a, b) => a[sortField] - b[sortField]); 
     return sorted
    }else{
     const sorted=[...data].sort((a, b) => b[sortField] - a[sortField]); 
     return sorted
    }
  
};