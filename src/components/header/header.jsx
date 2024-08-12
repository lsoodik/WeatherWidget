import { useState } from "react";
export default function Header() {
  const [location, setLocation] = useState("");
  return (
    <div className={"container"}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Your city"
          aria-label="Username"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="button" className="btn btn-outline-secondary">
          Поиск
        </button>
        
      </div>
    </div>
  );
}
