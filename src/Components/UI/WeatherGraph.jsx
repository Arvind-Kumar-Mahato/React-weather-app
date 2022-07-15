import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "../Css/WeatherGraph.css";

const WeatherGraph = () => {

    const data = useSelector((store) =>
       store.temp
    )

    const temp = useSelector((store)=>
    store.day
    )
  return (
    <div>
      <p>{temp}</p>
    </div>
  )
}

export default WeatherGraph;
