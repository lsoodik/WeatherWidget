import { useState } from "react";
import style from "./input.module.css"
export default function Input() {
  const [location, setLocation] = useState("");
  
  return (
    <div className={style.inputwrapper + " " + "container"}>
      <h3>Weather</h3>
      <div className="input-group">
        <input
          type="text"
          className={style.input + " " + "form-control"}
          placeholder="Your city"
          aria-label="Username"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="button" className={style.inputBtn + " " + "btn-outline-secondary"}>
          Поиск
        </button>
        
      </div>
    </div>
  );
}
