import React from "react";
import "./CustomToggle.css";

interface CustomToggleProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function CustomToggle({ checked = false, onCheckedChange, className = "" }: CustomToggleProps) {
  const toggle = () => {
    onCheckedChange?.(!checked);
  };

  return (
    <div 
      className={`custom-toggle-root ${checked ? "custom-toggle-pressed" : "custom-toggle-not-pressed"} ${className}`}
      data-state={checked ? "on" : "off"}
      onClick={toggle}
    >
      <div className="custom-toggle-thumb">
        <div className="custom-toggle-thumb-inner" />
      </div>
    </div>
  );
}
