import './Charts.css'
import React, {useState,useEffect,useContext} from 'react'
import context from '../../MyContext'
import {Line, Bar} from 'react-chartjs-2'

function Charts() {
    const {dailyData} = useContext(context)
    const {Conditionalselected} = useContext(context)
    const {selected} = useContext(context)
    const {dataCard} = useContext(context)
    const {confirmed, recovered, deaths} = dataCard;
    var thenewData = {}
    dataCard ? thenewData={
        confirmed,
        recovered,
        deaths,
    } :thenewData={
        confirmed:"",
        recovered:"",
        deaths:"",
    }
    console.log(thenewData);
    
    const LineChart =( 
        dailyData.length ?
            (<Line  
                data={{
                    labels:dailyData.map(({date})=> date),
                    datasets:[
                        {
                            data: dailyData.map(({confirmed})=>confirmed),
                            label:'infected',
                            borderColor:'#3333ff',
                            fill:true
                        },
                        {
                            data: dailyData.map(({deaths})=>deaths),
                            label:'death',
                            borderColor:'red',
                            backgroundColor:'rgba(255,0,0,.5)',
                            fill:true
                        }
                    ]
                }}
            />) : null
    );
    const BarChart =( 

            (<Bar  
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[
                        {
                            // data: dailyData.map(({confirmed})=>confirmed),
                            label:'People',
                            backgroundColor:[
                                'rgba(0,0,255,.5)',
                                'rgba(0,255,0,.5)',
                                'rgba(255,0,0,.5)',
                            ],
                            data:[thenewData.confirmed.value, thenewData.recovered.value,thenewData.deaths.value]
                        },
                    ]
                }}
                options={{
                    legend:{ display:false},
                    tittle:{ display:true , text: `Current State in "${selected}`}
                }}
            />) 
    );
    return (
        <div className="charts" 
        style={{
            margin:"20px 0"
        }}>
            {Conditionalselected ? BarChart :LineChart}
        </div>
    )
}


export default Charts
