import React, { useState, useEffect } from "react";
import axios from "../axios";
import './Rows.css'
import req from '../request';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_Url = "https://image.tmdb.org/t/p/original/";
// const base_fetch_URL = "https://api.themoviedb.org/3";

  function Rowtwo() {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerurl] = useState("")

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(req.fetchTrending);
        setMovies(request.data.results);
        // console.log(request.data.results);

        return request;
      }
      fetchData();
    },[req]);

    const opts={
      heihgt:"390",
      width:"100%",
      playerVars:{
        autoplay:1,
      },
    }
    const handleClick = (mov)=>{
      if(trailerUrl){
        setTrailerurl("");
      }else{
        movieTrailer(mov?.name || "")
        .then((url)=>{
          const urlParams = new URLSearchParams( new URL(url).search)
          setTrailerurl(urlParams.get('v'))
        })
        .catch((err)=>console.log(err))
      }
    }

  return (
      <div className="row">
        <h2 className="title">Trending now</h2>        
        <div className="posters_container">
             {movies.map(m=>(
                <img 
                onClick={()=>handleClick(m)}
                className="single_poster_container" 
                key={m.id} src={`${base_Url}${m.backdrop_path}`} 
                alt="m." />    
             ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

      </div>
  );
}

export default Rowtwo;
