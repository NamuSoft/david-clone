import React from "react";
import "./custom.css";

type Props = {
  className?: string; // Make className optional
  style?: React.CSSProperties; // Use React.CSSProperties for style
  onClick?: () => void; // onClick function should be optional
};

const PrevArrow = (props: Props) => {
  const combinedStyle: React.CSSProperties = {
    ...props.style,
    display: "block",
    content: `url('/images/left-arrow.png')`,
    zIndex: 10,
    transition: "all .3s",
    top: "auto",
    bottom: "-100px",
    height: "50px",
    width: "100px",
    position: "absolute",
    left: "40%", // Default position for large screens
  };

  return (
    <div
      className={`prev-arrow ${props.className}`}
      style={combinedStyle}
      onClick={props.onClick}
    />
  );
};

export default PrevArrow; // Export the component for use in other parts of your application
