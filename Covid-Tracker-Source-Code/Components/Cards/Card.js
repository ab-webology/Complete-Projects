import './Card.css'
import React,{useContext} from 'react'
import context from '../../MyContext'
import Count from 'react-countup'

function Card() {
    const {dataCard} = useContext(context)
    console.log(dataCard);
    if(!dataCard){
        return 'Loading....'
    }

    return (
        <div className="cards">
            <div className="card infect">
                <h3>infected  
                    <span><Count style={{textAlign:"center",backgroundColor:"rgb(250,250,250)",margin:"10px 0px"}} start={0} end={dataCard.confirmed.value} duration={2.5} /></span>
                </h3>
                <h1> {new Date(dataCard.lastUpdate).toDateString()} </h1>
                <h2>Number of Active Cases </h2>
            </div>
            <div className="card recover">
                <h3>Recovered 
                    <span> 
                        {console.log(`${dataCard.recovered.value} hello`)}
                        <Count style={{textAlign:"center",backgroundColor:"rgb(250,250,250)",margin:"10px 0px"}} start={0} end={dataCard.recovered.value} duration={2.5}/> 
                    </span>
                </h3>
                <h1> {new Date(dataCard.lastUpdate).toDateString()} </h1>
                <h2>Number of Recovered People </h2>
            </div>
            <div className="card death">
                <h3>Deaths <span> 
                    <Count style={{textAlign:"center",backgroundColor:"rgb(250,250,250)",margin:"10px 0px"}} start={0} end={dataCard.deaths.value} duration={2.5}/> 
                </span></h3>
                <h1> {new Date(dataCard.lastUpdate).toDateString()} </h1>
                <h2>Number of Deaths  </h2>
            </div>
        </div>
    )
}

export default Card
