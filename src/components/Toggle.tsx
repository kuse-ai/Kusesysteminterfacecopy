import React from "react";
import "./Toggle.css";

interface ToggleProps {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

export function Toggle({ pressed = false, onPressedChange }: ToggleProps) {
  return (
    <div
      className={`toggle-root ${pressed ? "pressed" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onPressedChange?.(!pressed);
      }}
    >
      <div className={`toggle-knob ${pressed ? "pressed" : ""}`} />
      <div className="toggle-root-inner-shadow" />
    </div>
  );
}
