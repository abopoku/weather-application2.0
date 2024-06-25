import React, {useState} from 'react';
import axios from 'axios' 
import WeatherData from './components/WeatherData';

function App() {
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

//outlined classnames in container (top and bottom)
//styled in index.css not app.css because it's small scale page
//on Mac option+shift+8 to get Degree symbol(°)
// added input which has the onChange code, placed before container
// No click button for enter bu adding onKeyPress
  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder= 'Enter Location'
        type="text"/>
      </div>

      <div className="container">
        {/*WeatherData Component*/}
        <WeatherData data = {data}/>
      </div>
  
    </div>
  );
}

export default App;
