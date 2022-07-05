import React, { useContext, useEffect, useState } from "react";
import Movie from "./Movie";
// import dotenv from "dotenv";
const AppContext = React.createContext();

// const KEY = process.env.API_KEY;

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=82804be4`;

const AppProvider = ({children}) =>{

    const [isloading, setIsloading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show:"false", msg:""});
    const [query, setQuery] = useState("spider-man");

    const getMovies = async (url) => {
        setIsloading(true);
       try{
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);
         if(data.Response === 'True'){
            setIsloading(false);
            setMovie(data.Search);
            setIsError({
              show: false,
              msg: "",
            });
         }
         else{
            setIsError({
                show: true,
                msg: data.Error
            });
         }

       }catch(error){
        console.log(error);
       }
    }

   useEffect(() => {

    let timeOut =  setTimeout(() =>{
       getMovies(`${API_URL}&s=${query}`); 
     }, 800)

     return () => clearTimeout(timeOut);

   }, [query]);

   return <AppContext.Provider value = {{isloading, movie, isError, query, setQuery}}>
    {children}
   </AppContext.Provider>
}

const useGlobalcontext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalcontext};