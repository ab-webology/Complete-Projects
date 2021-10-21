import React, {useState,useEffect} from 'react'
import './NavBar.css'

function NavBar() {
    const [scrolling,setScroll]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setScroll(true)
            }else{
                setScroll(false)
            }
            return ()=>{
                window.removeEventListener("scroll")
            }
        })
    })
    return (
        <div className={`container ${scrolling && "container_bg"}`}>
            <img 
            className="nav_logo"
            src="https://docs.google.com/uc?id=12D4iEe-bfuqm9BaN6uz7h0HwnU8O__dg" 
            alt="logo" />
            <img 
            className="nav_link" 
            src="https://docs.google.com/uc?id=140CEL8JzT0IUWOWMLycsXLwZ-97i_S39" 
            alt="navBar" />
        </div>
    )
}

export default NavBar
