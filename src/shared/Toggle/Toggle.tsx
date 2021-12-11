import React from "react";

interface IProps {
  isActive: boolean;
  onChange(): void;
}
export default function ToggleButton(props: IProps) {
  const { isActive, onChange } = props;

  return (
    <div
      data-testid="toggle"
      onClick={onChange}
      className={`toggle-container ${isActive ? "active" : "inactive"}`}
    >
      <div className="toggle-line"></div>
      <div
        className={`toggle-circle ${isActive ? "active" : "inactive"}`}
      ></div>
    </div>
  );
}
