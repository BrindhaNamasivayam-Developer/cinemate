import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../customhook/useFetch"
import { useEffect } from "react";
import { useTitle } from "../customhook/useTitle";

export const Search=({apiPath})=>{
  console.log(apiPath);
  const [useParam] = useSearchParams();
  const getQuery = useParam.get('q');

  let {data:movies} =  useFetch(apiPath,getQuery);
  const displayTitle = useTitle(getQuery)
  
  return(
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <p>{movies.length>0?`"Result for" ${getQuery}`:"No Result Found"}</p>
        <div className="flex justify-start flex-wrap">
          {movies.map((values)=>(
            <Card key={values.id} movie={values}/>
          ))}
        </div>
      </section>
    </main>
  )
}