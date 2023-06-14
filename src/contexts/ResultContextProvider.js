import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useRoutes, useNavigate } from "react-router-dom";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  console.log(results);
  
  const options = {
    method: "GET",
    url: "https://google-search74.p.rapidapi.com/",
    params: {
      query: "nike",
      limit: "10",
      related_keywords: "true",
    },
      headers: {
        'X-RapidAPI-Key': '85f4257d75msh68d0e3e788e655cp1cc6b0jsn8f40e0682488',
        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    },
  };
  const getResults = async () => {
    try {
      const response = await axios.request(options);
      setResults(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate();
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
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
