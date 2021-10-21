import React from 'react'
import covid from '../../covid.png'

function Header() {
    return (
        <div style={{
            // width:"100px",
            // height: "100px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            margin:"40px 0"}}>
                
            <div
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",}}>
                
            <h1
            style={{
                fontSize:"5em",
                color:"#00b4d8"
            }}
            >C</h1>
            <img 
            style={{
            width:"100px",
            height: "100px",
            
            objectFit:"contain"
            }}
             src="https://docs.google.com/uc?id=1fXuFbitAJl6ifNys0CBJFV_TbfODpsVJ"
            />
            <h1
            style={{
                fontSize:"5em",
                color:"#00b4d8"
            }}
            >VID-19</h1>
            </div>
            <div style={{
                marginLeft:"200px",
                marginTop:"-10px",
                fontSize:"2.5em",
                color:"#EE1D52"
            }}>
                Tracker
            </div>
            <div style={{
                position:"fixed",
                top:"15px",
                right:"10px",
                color:"#000814",
                backgroundColor:"#fff",
                padding:"5px 10px"
            }}>
                <h3>Call Me On <span style={{color:"#EE1D52"}}>+251-920861401</span> </h3>
            </div>
        </div>
    )
}

export default Header
