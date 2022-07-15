import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/UI/SearchBar';
import "./Components/Css/SearchBar.css"
import WeatherReport from './Components/UI/WeatherReport';
import WeatherGraph from './Components/UI/WeatherGraph';


function App() {
  return (
    <div className='container'>
    <div className="App">
   <SearchBar/>
   <WeatherReport/>
   <WeatherGraph/>
    </div>
    </div>
  );
}

export default App;
