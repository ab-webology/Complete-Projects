import './App.css';
import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Rows.css'
import req from './request';

const base_Url = "https://image.tmdb.org/t/p/original/";
// const base_fetch_URL = "https://api.themoviedb.org/3";

function Rows({ title, fetchLink }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(req.fetchLink);
      setMovies(request.data.results);
      console.log(request.data.results);

      return request;
    }
    fetchData();
  },[fetchLink]);

  return (
      <div className="row">
        <h2>{title}</h2>        
        <div className="posters_container">
             {movies.map(m=>(
                <img className="single_poster_container" key={m.id} src={`${base_Url}${m.poster_path}`} alt="m." />    
             ))}
        </div>
      </div>
  );
}

export default Rows;
