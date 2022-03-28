//URL https://api.openweathermap.org/data/2.5/weather?q=orlando&units=imperial&appid=5504a0540e147aca5a89bc2014ecbebc
//API KEY 5504a0540e147aca5a89bc2014ecbebc

import axios from 'axios';
import { useState } from 'react';
import './index.css';


function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5504a0540e147aca5a89bc2014ecbebc`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url)
      .then((response) => {
        // handle success
        setData(response.data)
        console.log(response.data)
      })
    }   
  }

  return (
    <div className="app">
      {/* Type location, input  */}
      <div className="search">
        <input type="text" 
          value={location}
          // retrives input value
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
        />
      </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              <h1>{data.main ? <h1>{Math.floor(data.main.temp)} °C</h1> : null} </h1>
            </div>
            <div className="description">
              <p>{data.weather ? <p>{data.weather[0].main}</p> : null} </p>
            </div>
            <div className='picture'>
              {/* <p>{data.weather ? <p>{data.weather[0].icon}</p> : null} </p> */}
              {/* var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'; */}
              {/* <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" /> */}
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>{data.main ? <p>{Math.floor(data.main.feels_like)} °C</p> : null }</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p>{data.main ? <p>{Math.floor(data.main.humidity)} %</p> : null }</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p>{data.wind ? <p>{Math.floor(data.wind.speed)}m/h</p> : null }</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
