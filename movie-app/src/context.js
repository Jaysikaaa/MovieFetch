import React, { createContext, useContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const AppContext = createContext();

export const Appprovider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState('')

  const getMovies = async (url) => {
    setisLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   const timerOut = setTimeout(() => {
        getMovies(`${API_URL}&s=${query}`);
    } , 800)
   return () => clearTimeout(timerOut)
  }, [query]);
  return (
    <AppContext.Provider value={{ isError, isLoading, movie , query, setQuery}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
