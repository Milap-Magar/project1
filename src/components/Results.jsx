import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loader from "./Loader";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation(); //images, news, videos

  useEffect(() => {
    getResults().then((resp)=>{
      console.log(resp);
    })
  }, []);

  if (isLoading) return <Loader />;

  switch (location.pathname) {
    case "/search":
      return "SEARCH";
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
