import React from 'react'
import "../Css/WeatherReport.css"
import { useSelector, useDispatch } from "react-redux";
import { addtemp, daytemp, sunrise } from "../../Redux/action"
const WeatherReport = () => {
  const data = useSelector((store) => store.data);
  // console.log(data);
  const dispatch = useDispatch();
  return (
    <div className = "boxscroll">
      {data.length > 0 &&
        data.map((e) => {
          let timeZ = e.dt;
          let day = new Date(timeZ * 1000);
          var options = { weekday: "long" };
          const din = new Intl.DateTimeFormat("en-US", options).format(day);

          return (
            <div className="boxscroll1" onClick={()=>{
             let arr = [
                `${e.temp.morn}°C`,
                `${e.temp.day}°C`,
                `${e.temp.eve}°C`,
                `${e.temp.night}°C`,
      ];      

      let daytem=[
         e.temp.day,
         e.weather[0].main
              
      ] 

      let sun=[
        e.pressure,
        e.humidity,
        e.sunrise,
        e.sunset,

      ]
               dispatch(sunrise(sun))
               dispatch(daytemp(daytem))
              dispatch(addtemp(arr))

            }}>
            <p className="boxscroll2">{din}</p>
              <p>
                <span className="boxscroll2">{Math.round(e.temp.max - 273)}° </span>
                {Math.round(e.temp.min - 273)}°
              </p>
              <img
                style={{
                  height: " 30px",
                  width: "50px",
                }}
                src={
                  e.weather[0].main === "Clear"
                    ? "https://st.depositphotos.com/1007168/1249/i/950/depositphotos_12492703-stock-photo-summer-hot-sun.jpg"
                    : e.weather[0].main === "Clouds"
                    ? "https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-8.png"
                    : "https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-rain-icon-png-image_1558221.jpg"
                }
              alt =""/>
              <p>{e.weather[0].main}</p>
            </div>
          );
        })}

    </div>
  )
}

export default WeatherReport;
