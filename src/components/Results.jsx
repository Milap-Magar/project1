import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loader from "./Loader";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation(); //images, news, videos

  useEffect(() => {
    getResults("");
  }, []);

  if (isLoading) return <Loader />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {/* {results?.results?.map(({ link, title })=>(
            
          ))} */}
        </div>
      )
    case "/images":
      return "SEARCH";
    case "/news":
      return "SEARCH";
    case "/videos":
      return "SEARCH";
    default:
      return "ERROR";
  }
};

export default Results;
