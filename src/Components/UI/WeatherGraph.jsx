import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../Redux/store';
import "../Css/WeatherGraph.css";

const WeatherGraph = () => {

    const data = useSelector((store) =>
       store.temp
    )
   
    const temp = useSelector((store)=>
    store.day
    )

   
   
    
  return (
    <div  className='boxtemp'>
    
    <div className='boxtemp1'>
   
    {temp && <p>{Math.round(temp[0] - 273)}°C</p>}
   
    {temp && <img
                style={{
            
                 
                  width: "150px",
                }}
                src={
                  temp[0] === "Clear"
                    ? "https://st.depositphotos.com/1007168/1249/i/950/depositphotos_12492703-stock-photo-summer-hot-sun.jpg"
                    : temp[0] === "Clouds"
                    ? "https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-8.png"
                    : "https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-rain-icon-png-image_1558221.jpg"
                }
           alt =""   />}
                    
               
           
                

       </div>
    
    </div>
  

  
)}

export default WeatherGraph;
