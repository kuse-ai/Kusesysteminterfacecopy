import React, { useState } from "react";
import "../components/CustomToggle.css";

export default function Asdf() {
  const [checked, setChecked] = useState(false);

  return (
    <div 
      className={`custom-toggle-root ${checked ? "custom-toggle-pressed" : "custom-toggle-not-pressed"}`}
      data-state={checked ? "on" : "off"}
      onClick={() => setChecked(!checked)}
      data-name="asdf"
    >
      <div className="custom-toggle-thumb">
        <div className="custom-toggle-thumb-inner" />
      </div>
    </div>
  );
}
