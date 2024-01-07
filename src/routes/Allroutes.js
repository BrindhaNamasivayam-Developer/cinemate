import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetails, Search, PageNotFound } from '../pages';

const Allroutes = () => {
    return (
        <div className='dark:bg-slate-800'>
            <Routes>
                <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>}></Route>
                <Route path="movie/:id" element={<MovieDetails/>}></Route>
                <Route path="movie/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}></Route>
                <Route path="movie/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}></Route>
                <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming" title="Up Coming"/>}></Route>
                <Route path="search" element={<Search apiPath="search/movie"/>}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </div>
    )
}

export default Allroutes;