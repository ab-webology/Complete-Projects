// import './CountryPicker.css'
// import axios from 'axios'
// import React, {useState,useEffect,useContext} from 'react'
// import {NativeSelect,FormControl} from '@material-ui/core' 
// import context from '../../MyContext'

// function CountryPicker() {
//     const [selectedCountry,setSelected]=useState("")
//     const count = useContext(context)
//     const {country} = count;
//     const {handleCountryChange} = useContext(context)

// // useEffect(()=>{
// //     if(selectedCountry==="") {
// //         console.log("select country");
// //     }else{
// //     console.log(singleCountryData);
// //      }
// // },[selectedCountry])
//     return (
//         <div className="container">
//             <FormControl className="formControl">
//                 <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange}>
//                     <option value="global">Global</option>
//                     {country.map((c)=><option key={c.name} value={c.name}>{c.name}</option>)
//                     }
//                       {  console.log(selectedCountry)}
//                 </NativeSelect>
//             </FormControl>
//         </div>
//     )
// }

// export default CountryPicker
