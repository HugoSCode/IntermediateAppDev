import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { IndividualCard } from "../Stories/IndividualCard.jsx";
import { IndividualLeaderCard } from "../Leaders/IndividualLeaderCard";
export const Paginate = ({ items, itemsPerPage, type }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div>
      {currentItems.map((item) => (
        <div key={item.id} className=" p-4 ">
          {type==="stories" ? <IndividualCard story={item}/> : <IndividualLeaderCard leader={item}/>}
        </div>
      ))}
      {pageCount>0 &&(
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        forcePage={currentPage}
        containerClassName={"flex justify-center mt-4 space-x-2"}
        pageClassName={
          "p-2 border rounded hover:bg-blue-500 hover:text-white cursor-pointer"
        }
        previousClassName={
          "p-2 border rounded hover:bg-blue-500 hover:text-white cursor-pointer"
        }
        nextClassName={
          "p-2 border rounded hover:bg-blue-500 hover:text-white cursor-pointer"
        }
        activeClassName={"bg-blue-500 text-white"}
      />
      )}

    </div>
  );
};
