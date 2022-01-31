import React, { useState } from 'react'
import cities from './cities.json'
import './App.css'

const App = () => {
  const [inp, setInp] = useState('');
  const [city, setcity] = useState([]);
  const [weather, setweather] = useState(null);

  const changeHandler = (e) => {
    setInp(e.target.value)
    const cpy = cities.filter(function (data) {
      return data.name.toLowerCase().includes(inp.toLowerCase())
    })
    setcity(cpy);
  }
  const clear = () => {
    setcity([])
    setInp('')
    setweather(null)
  }
  const search = () => {
    const cpy = [...cities]
    setcity(cpy)
    setInp(' ')
  }
  const weatherHandler = (e) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city[e].name}&appid=7881fd3c5dff7aff74a7cd7a86bd9a40`
    const response = fetch(url)
      .then(function (data) {
        const resjson = data.json()
          .then(function (data2) {
            setweather(data2)
          })
      })
    setInp('')
    setcity([])
  }

  return (
    <>
      <div className="main">
        {weather && (
          <h2>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /><br />
            <span>City: {weather.name}</span><br />
            <span>Temp: {weather.main.temp} °K ( Min-Temp {weather.main.temp_min} °K)</span><br />
            <span>Min-Temp: {weather.main.temp_min} °K</span><br />
            <span>Max-Temp: {weather.main.temp_max} °K</span><br />
            <span>Weather: {weather.weather[0].main}</span><br />
          </h2>
        )}
      </div>
      <div className='cnt'>
        <div className="inp">
          <input
            type="text"
            onChange={changeHandler}
            value={inp}
          />
          <div className="icon">
            {inp ? <ion-icon onClick={clear} name="close-outline"></ion-icon> :
              <ion-icon onClick={search} name="search-outline"></ion-icon>}
          </div>
        </div>
        {inp.length > 0 &&
          <div className="search">
            {city.map((e, i) => (
              <p key={i} onClick={() => weatherHandler(i)}>
                {e.name}
              </p>
            )).splice(0, 15)}
          </div>
        }
      </div>
    </>
  )
}
export default App;