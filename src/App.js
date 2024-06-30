import React, {useState, useEffect} from 'react';
import axios from 'axios' 
import WeatherData from './components/WeatherData';
import SearchBar from './components/SearchBar';

function App() {

  // setting up connection of API for default location
  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const defaultLocation = 'Miami';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=imperial&appid=${API_KEY}`;
      const response = await fetch(url);
      const defaultData = await response.json();
      setData(defaultData);
    }
    fetchDefaultWeather();
  }, [])
  //setting up connection of API for data using useState
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  // location is whats passed through in url. also changing metric from celsius to fahrenheit--&units=imperial 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`

  // connecting API through search function. If statement allows user to just hit enter on keyboard and it will search
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      // set as empty string so when we search it reverts to being blank
      setLocation('')
    }
  }

  return (
    <div className="app">
      {/*SearchBar Component*/}
      <SearchBar location={location} searchLocation={searchLocation} setLocation={setLocation}/>

      {/*Container classNames (top and bottom) styles in index.css*/}
      <div className="container">
        {/*WeatherData Component*/}
        <WeatherData data = {data}/>
      </div>
  
    </div>
  );
}

export default App;
