import React from 'react';

export default function WeatherData({ data }) {
  return (
    <>
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

    {/*ensures when user enters new search, the info at the bottom is not visible until enter is hit */}
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
    </>
  )
}

