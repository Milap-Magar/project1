import React, { createContext, useContext, useState } from "react";
import { useRoutes, useNavigate } from "react-router-dom";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate();
  };

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "57c1f85d64msh07a78d94077ca24p17f839jsn27bc4669a2c8",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });

    const data = await response.json();

    console.log(data);
    
    setResults(data);
    setIsLoading(false);
  };

  const value = {
    getResults,
    results,
    searchTerm,
    setSearchTerm,
    isLoading,
    handleRedirect,
  };

  return (
    <ResultContext.Provider value={value}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
