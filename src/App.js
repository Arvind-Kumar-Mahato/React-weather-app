import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/UI/SearchBar';
import "./Components/Css/SearchBar.css"
import WeatherReport from './Components/UI/WeatherReport';
import WeatherGraph from './Components/UI/WeatherGraph';
import WeatherDetails from './Components/UI/WeatherDetails';


function App() {
  return (
    <div className='container'>
    <div className="App">
   <SearchBar/>
   <WeatherReport/>
   <WeatherGraph/>
   <WeatherDetails/>
    </div>
    </div>
  );
}

export default App;
