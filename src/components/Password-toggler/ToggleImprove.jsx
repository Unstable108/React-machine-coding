import React, { useState, useCallback, useMemo } from 'react';
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

// Use React.memo to prevent unnecessary re-renders of the component
// if its props (in this case, none) haven't changed.
const TogglePassword = React.memo(function TogglePassword() {
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  // useCallback memoizes the function to prevent it from being recreated on every render.
  // This is especially helpful if this function were passed down to a child component.
  const changeHandler = useCallback(() => {
    setHidden(prevHidden => !prevHidden);
  }, []);

  // useMemo memoizes the JSX for the icon, so it's only re-evaluated when the 'hidden' state changes.
  const icon = useMemo(() => (
    hidden ? <EyeOff size={18} /> : <Eye size={18} />
  ), [hidden]);

  const visibilityLabel = useMemo(() => (
    hidden ? "Password Hidden" : "Password Visible"
  ), [hidden]);

  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={hidden ? "password" : "text"}
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
          {icon}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {visibilityLabel}
      </span>
    </div>
  );
});

export default TogglePassword;