import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log("данные в компоненте useFetch", data);
      })
      .catch((error) => {
        console.log("Ошибка:", error);
      });
  }, [url]);
  
  return data;
}
