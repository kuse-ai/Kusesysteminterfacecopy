import React, { ReactNode } from "react";
import "./NavItem.css";

interface NavItemProps {
  icon: ReactNode;
  label: string;
}

export function NavItem({ icon, label }: NavItemProps) {
  return (
    <div className="nav-item-root">
      {icon}
      <div className="nav-item-content">
        <div className="nav-item-label-container">
          <div className="nav-item-label-wrapper">
            <p className="nav-item-label">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
