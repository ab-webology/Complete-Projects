import './App.css';
import axios from 'axios'

import React, {useState,useEffect} from 'react'
import {Cards,Charts,CountryPicker} from './Components'
import Header from './Components/additional/Header';
import MyContext from './MyContext'
import {NativeSelect,FormControl} from '@material-ui/core' 


// import {fetchData} from './Components/api'

function App() {
  const [dataCard,setData] = useState("")
  const [dailyData,setDailyData] = useState([])
  const [country,setCountry] = useState([])
  const [selected,setSelected] = useState("");
  const [Conditionalselected,setConditionalSelected] = useState(false);

  const url = "https://covid19.mathdro.id/api"
  
useEffect(()=>{
  const fetchData = async ()=>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        setCountry(countries)
        if(selected!==""){
            const {data} = await axios.get(`${url}/countries/${selected}`)
            const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(`${url}/countries/${selected}`)
            const singlemodData={
              confirmed,
              recovered,
              deaths,
              lastUpdate,
            }
            setData(singlemodData)
            setConditionalSelected(true)
            console.log(Conditionalselected);
            // {  console.log(selected)}
        }else{
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        const modData={
          confirmed,
          recovered,
          deaths,
          lastUpdate,
        }
        setData(modData)
        // console.log(country);
        const {data} = await axios.get(`${url}/daily`)
        const modDailyData= data.map((daily)=>({
          confirmed:daily.confirmed.total,
          deaths:daily.deaths.total,
          date:daily.reportDate
        }))
        setDailyData(modDailyData)
      }
    }catch(err){
        console.log("errooooo")
    }   
}
fetchData()
},[selected])

  return (
    <MyContext.Provider value={{dataCard,dailyData,selected,Conditionalselected}}>
      <div className="container">
        <Header />
        <Cards />
        
        <div className="container">
            <FormControl className="formControl">
                <NativeSelect defaultValue="" onChange={(e) => setSelected(e.target.value)}>
                    <option value="global">Global</option>
                    {country.map((c)=><option key={c.name} value={c.name}>{c.name}</option>)}
                      {/* {  console.log(selected)} */}
                </NativeSelect>
            </FormControl>
        </div>
        <Charts />
      </div>
    </MyContext.Provider>
  );
}
export default App;
