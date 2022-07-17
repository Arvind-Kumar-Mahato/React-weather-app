import React,{Component} from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "../Css/WeatherGraph.css";
import Chart from "react-apexcharts";

const WeatherGraph = () => {

    const data = useSelector((store) =>
       store.temp
    )
   
    const temp = useSelector((store)=>
    store.day
    )
    console.log(temp);
   


    useEffect(()=>{
    
    },[data])
    
    const Graph=()=>{
        return <><Charts temp={data}/></>
     }
  return (
    <div  className='boxtemp'>
    
    <div className='boxtemp1'>
  {/* { console.log("rt",temp[0])} */}
    {temp && <p>{Math.round(temp[0])}°C</p>}
       
    {temp && <img
                style={{
            
                 
                  width: "150px",
                }}



                    src={
                  temp[1] === "Clear"
                    ? "https://st.depositphotos.com/1007168/1249/i/950/depositphotos_12492703-stock-photo-summer-hot-sun.jpg"
                    : temp[1] === "Clouds"
                    ? "https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-8.png"
                    : "https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-rain-icon-png-image_1558221.jpg"
                }
           alt =""   />}

       </div>
      
       {data && <Graph/> }
       </div>
  

  
)}

export default WeatherGraph;


class Charts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        options: {
          chart: {
            id: "area",
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            categories: ["Morning", "Day", "Evening", "Night"],
          },
          dataLabels: {
            enabled: false,
          },
        },
        series: [
          {
            name: "Temp(°F)",
            data: props.temp,
          },
        ],
      };
    }
  
    render() {
      return (
        <div style={{ width: "100%" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            width="100%"
            height="300px"
          />
        </div>
      );
    }
  }
