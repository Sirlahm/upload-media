import React from "react";

const Button = (props) => {
  const { className } = props;
  return (
    <button
      className={`${className}  cursor-pointer px-4 py-2.5 rounded border-none text-sm text-white  focus:outline-none `}
    >
      {props.children}
    </button>
  );
};

export default Button;
