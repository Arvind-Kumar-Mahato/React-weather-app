import React,{useState } from 'react'
import "../Css/WeatherDetails.css";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import graph from "../img/graph.png";

const WeatherDetails = () => {

    const [sunrise,setSunrise] = useState("");
    const [sunset,setSunset] = useState("");
    const sun= useSelector((store)=>
    store.sunrise
      
    )

    useEffect(()=>{
        let sunrise = sun[2];
        let sunRtime = new Date(sunrise * 1000);
        setSunrise(sunRtime.toLocaleTimeString());
    
        let sunset = sun[3];
        let sunStime = new Date(sunset * 1000);
        setSunset(sunStime.toLocaleTimeString());
    },[sun])

    // console.log(sun);
  return (
    <div>
      <div className="main_details">
        
        <div className="humandPre">
           
            <div className="pressure">
                <h4>Pressure</h4>
                <p>{sun[0]} hpa</p>
            </div>
            <div className="humid">
                    <h4>Humidity</h4>
                    <p>{sun[1]} %</p>
                </div>
            </div>

            <div className="riseAndset">
                <div className="rise">
                    <h4>Sunrise</h4>
                    <p>
                    {sunrise}
                    </p>
                </div>
                <div className="set">
                    <h4>Sunset</h4>
                    <p>
                    {sunset}
                    </p>
                </div>
                </div>
                
            </div>

            <div className='boxgraph'>
                <img  className = 'img'src = {graph} alt = ""/>
            </div>
    </div>
  )
}

export default WeatherDetails
