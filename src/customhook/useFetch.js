import { useState,useEffect } from "react";

export const useFetch =(apiPath,query="")=>{
    
    let url = `https://api.themoviedb.org/3/${apiPath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&query=${query}`;
    console.log(url);
    const[data,setData] = useState([]);

    useEffect(()=>{
        async function getMovieDetails(){
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        getMovieDetails();
    },[url])

    return{ data }
}