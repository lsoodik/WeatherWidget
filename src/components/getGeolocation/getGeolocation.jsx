import { useGeolocated } from "react-geolocated";
import useFetch from "../useFetch/useFetch";
import { useEffect, useState } from "react";

export default function GetGeolocation() {
  const [latitude, setLatitiude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState({});
  const [temp, setTemp] = useState({})

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      setLatitiude(coords.latitude);
      setLongitude(coords.longitude);
    }
  }, [coords]);

  const API_KEY = "647d26aeed2e5216c57fe2928f1fdf0c";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  const data = useFetch(url);
  
  useEffect(() => {
    setTemp(Math.round(data.main.temp - 273));
    setLocation(data.name);
  }, [data]);

  return !isGeolocationAvailable ? (
    <div>У нас нет доступа к вашей геолокации</div>
  ) : !isGeolocationEnabled ? (
    <div>Геолокация отключена</div>
  ) : coords ? (
    <div className={"container"}>
      <h3>
        <span className="text-muted">Ваш город:</span> {location}
      </h3>
      <p>lat: {latitude}</p>
      <p>long: {longitude}</p>
      <p>temp: {temp}</p>
    </div>
  ) : (
    <div>Получаем данные... </div>
  );
}
