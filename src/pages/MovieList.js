import { useFetch } from "../customhook/useFetch"
import {Card} from "../components"
import { useTitle } from "../customhook/useTitle"

export const MovieList = ({apiPath,title}) => {
    const {data:movies} = useFetch(apiPath)
    const displayTitle = useTitle(title);
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies.map((value)=>(
                       <Card key={value.id} movie={value}/> 
                    ))}                                   
                </div>
            </section>
        </main>
    )
}
