import React, { useEffect, useState } from "react";
import cities from "./cities.json";
import "./App.css";
import { GiBoomerangSun } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { GrClose } from "react-icons/gr";

const App = () => {
  const [inp, setInp] = useState("");
  const [city, setcity] = useState([]);
  const [weather, setweather] = useState(null);

  const changeHandler = (e) => {
    setInp(e.target.value);
    const cpy = cities.filter(function (data) {
      return data.name.toLowerCase().includes(inp.toLowerCase());
    });
    setcity(cpy);
  };
  const clear = () => {
    setcity([]);
    setInp("");
  };
  const search = () => {
    const cpy = [...cities];
    setcity(cpy);
    setInp(" ");
  };
  const weatherHandler = async (e) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      city[e]?.name || "bhopal"
    }&appid=7881fd3c5dff7aff74a7cd7a86bd9a40`;
    const response = await fetch(url);
    const data = await response.json();
    setweather(data);
    console.log(data);

    setInp("");
    setcity([]);
  };
  useEffect(() => {
    weatherHandler();
  }, []);
  return (
    <div className="container">
      <div className="nav">
        <h3>
          <GiBoomerangSun color="yellow" />
          <span>Weather Forecast</span>
        </h3>
        <div className="inp">
          <input
            type="text"
            placeholder="Search Cities"
            onChange={changeHandler}
            value={inp}
          />
          <div className="icon">
            {inp ? (
              // <ion-icon onClick={clear} name="close-outline"></ion-icon>
              <GrClose onClick={clear} size={20} />
            ) : (
              <GoSearch onClick={search} size={20} />
            )}
          </div>
          {inp.length > 0 && (
            <div className="search">
              {city
                .map((e, i) => (
                  <p key={i} onClick={() => weatherHandler(i)}>
                    {e.name}
                  </p>
                ))
                .splice(0, 15)}
            </div>
          )}
        </div>
      </div>
      {weather && (
        <div className="main">
          <div className="box-cnt">
            <div className="box img-box">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
            </div>
            <div className="box">
              
              <span className="title">City: {weather.name}</span>
              
              <span className="title">
                Temp: {weather.main.temp} °K ( Min-Temp {weather.main.temp_min}
                °K)
              </span>
              <span className="title">
                Min-Temp: {weather.main.temp_min} °K
              </span>
              <span className="title">
                Max-Temp: {weather.main.temp_max} °K
              </span>
              <span className="title">Weather: {weather.weather[0].main}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
