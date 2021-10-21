import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from '../axios'
import request from '../request'


function Banner() {
    const [movie,setMovies]=useState([])

    useEffect(()=>{
        async function datafetch(){
            const req=await axios.get(request.fetchNetflixOriginals)
            setMovies(req.data.results[Math.floor(Math.random() * req.data.results.length)])
            console.log(movie,"heelllll")           
        }
        datafetch();
    },[])
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1)+ "  ..." : str;
    }
    return (
        <header className="header"
            style={{
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                }} >
            <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="btns">
                <button className="banner_btn">Play</button>
                <button className="banner_btn">My List</button>
            </div>
            <h2 className="banner_description">{truncate(movie?.overview,150)}</h2>
        </header>
    )
}

export default Banner
