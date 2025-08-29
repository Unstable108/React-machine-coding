import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

function TogglePassword() {
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  
  const changeHandler = () => {
    setHidden(!hidden);
  }
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={hidden===true?"password":"text"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick={changeHandler}
        >
          {hidden === true ? <EyeOff size={18} /> : <Eye size={18} />}
          
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {hidden === true ?"Password Hidden" :"Password Visible"}
      </span>
    </div>
  );
}

export default TogglePassword;
