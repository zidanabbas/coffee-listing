import React from "react";

const Button = (props) => {
  const { children, onClick = () => {}, type = "button", ariaLabel } = props;
  return (
    <button
      className="h-10 text-base rounded-md bg-third text-white px-2"
      onClick={() => onClick()}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
