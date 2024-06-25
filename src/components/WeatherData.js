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
    </>
  )
}

