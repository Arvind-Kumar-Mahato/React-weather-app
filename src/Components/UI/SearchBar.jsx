import React from 'react'
import  { useState,useRef  } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { adddata } from "../../Redux/action";
const SearchBar = ({ options = ["Oranges", "Apples", "Pearls"] }) => {
    var apikey =`5039632cb832ec1ad066b935929e983a`;
    const [currentCity, setCurrentCity] = useState("");
    const [coordinates, setCoordinates] = useState({});
    const dispatch=useDispatch()
    
    //
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()))

    const autocompleteRef = useRef();


    useEffect(() => {
      const handleClick = (event) => {
          if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
              setShowSuggestions(false)
          }
      };
      document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])


  

  const handleSuggestionClick = (suggetion) => {
    setValue(suggetion);
   
    setCurrentCity(suggetion);
    setShowSuggestions(false);
}

    //











    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
          }
        );
      },[])  
      useEffect(()=>{
        if (coordinates.lat !== undefined) {
  
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${apikey}&units=metric`
              )
              .then(({ data }) => {
                setCurrentCity(data.name);
                
              })
              .catch((err) => console.log(err));
          
          datas(coordinates.lat,coordinates.lng)
        }
      },[coordinates])
  
  
  
    function handleInputChange(event) {
      setCurrentCity(event.target.value);
      setValue(event.target.value);
    }
  
  
    function handleButtonClick() {
      
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apikey}&units=metric`)
      .then(({data})=>{
         
      let lat=data.coord.lat;
      let lon=data.coord.lon;
          datas(lat,lon)   
      }) 
  
    
    }
  
    function datas(lat, lon){
      axios.get(`
      https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${"dfbfa90f298297bd32d78348f443a400"}&units=metric`)
  .then(({data})=>
  {
     console.log("h",data.daily)
    dispatch(adddata(data.daily))
    
    
  })
  }
  
  
  
    function handleKeyPress(e) {
      if (e.key === "Enter") handleButtonClick();
    }
  return (
    <div className="Search" ref={autocompleteRef} >
      <div className="location_img">
        <img src="https://as2.ftcdn.net/v2/jpg/02/72/89/67/1000_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" alt = "" className="location" />
      </div>
      <div className="input">
        <input 
        className='input-box'
          
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder = "Search for City"
          onFocus={() => setShowSuggestions(true)}
         
        />

{showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}




      </div>
      <div className="search_img">
        <img
          className="search_btn"
          onClick={handleButtonClick}
          src="https://cdn-icons-png.flaticon.com/512/151/151773.png"  alt =""/> 

      </div>
    </div>
  )
}

export default SearchBar
