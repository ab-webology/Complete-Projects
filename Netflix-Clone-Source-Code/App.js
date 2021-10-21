import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Banner from './Rows/Banner'
import Rowone from './Rows/Rowone'
import Rowtwo from './Rows/Rowtwo'
import Rowthree from './Rows/Rowthree'
import Rowfour from './Rows/Rowfour'
import Rowfive from './Rows/Rowfive'
import Rowsix from './Rows/Rowsix'
import Rowseven from './Rows/Rowseven'
import RowDoc from './Rows/RowDoc'
import Intro from './Rows/Intro'



function App(){
  return (
      <div className="app">
        <NavBar />
        <Banner />
        <Rowone />
        <Rowtwo />
        <Rowthree />
        <Rowfour />
        <Rowfive />
        <Rowsix />
        <Rowseven />
        <RowDoc />
        <Intro />
      </div>
  );
}

export default App;


