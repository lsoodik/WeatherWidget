import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";

export default function GetLocation() {

  const [latitude, setLatitiude] = useState(null);
  const [longitude, setLongitude] = useState(null);

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

  
  return [latitude, longitude, isGeolocationAvailable, isGeolocationEnabled];
}
