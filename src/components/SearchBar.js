import React from 'react';

function SearchBar({ location, searchLocation, setLocation}) {
  return (
    <div className="search">
      {/*onChange code for onKeyPress */}
      <input
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder= 'Enter Location'
      type="text"/>
    </div>
  )
}

export default SearchBar;