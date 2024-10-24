import GetLocation from "../getGeolocation/getGeolocation"
import useFetch from "../useFetch";
import { useEffect, useState } from "react";

export default function Card() {

  const [location, setLocation] = useState(null);
  const [latitude, longitude, isGeolocationAvailable, isGeolocationEnabled] = GetLocation();

  const API_KEY = "647d26aeed2e5216c57fe2928f1fdf0c";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  const data = useFetch(url);

  useEffect(() => {
    if (data){
      setLocation(data.name);
    }
  }, [data]);

  return (
    <div className={"container"}>
      <h3>
        <span className="text-muted">Ваш город:</span> 
        {location}
      </h3>
      <p>temp: {Math.round(data.main?.temp)} &deg;C</p>
      <p>
        {latitude}
      </p>
      <img
        src={`http://openweathermap.org/img/w/${data.weather?.[0].icon}.png`}
        alt="weather status icon"
        className="weather-icon"
      />
    </div>
  )
}