import React, {useState} from 'react';
import axios from 'axios' 

function App() {
//setting up connection of API for data using useState
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

// location is whats passed through in url. also changing metric from celsius to fahrenheit--&units=imperial 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=92ebeb5189920efa058439f52712224c`

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
        {/* the data within the {} is from the API key which i placed in browser and downloaded the content to locate data needed to name in code */}
        {/* for most of the data we have to search within the containers they are in so ? and ending with : null */}
        {/* .toFixed() makes temp whole number no decimals */}
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <div className="high">
            {data.main ? <p>H:{data.main.temp_max.toFixed()}°F</p> : null}
          </div>
          <div className="low">
            {data.main ? <p>L:{data.main.temp_min.toFixed()}°F</p> : null}
          </div>
        </div>

{/* code on line 63 ensures that when user is entering a new search the information at the bottom is not visible until enter is hit */}
{data.name !== undefined &&
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
          <p>Feel Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
          <p>Wind Speed</p>
        </div>
      </div>
}
      </div>
  
    </div>
  );
}

export default App;
