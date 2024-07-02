import React from "react";
import "./custom.css";

type Props = {
  className?: string; // Make className optional
  style?: React.CSSProperties; // Use React.CSSProperties for style
  onClick?: () => void; // onClick function should be optional
};

const NextArrow = (props: Props) => {
  const combinedStyle: React.CSSProperties = {
    ...props.style,
    display: "block",
    content: `url('/images/right-arrow.png')`,
    zIndex: 10,
    transition: "all .3s",
    top: "auto",
    bottom: "-100px",
    height: "50px",
    width: "100px",
    position: "absolute",
    right: "40%", // Default position for large screens
  };

  return (
    <div
      className={`next-arrow ${props.className}`}
      style={combinedStyle}
      onClick={props.onClick}
    />
  );
};

export default NextArrow; // Export the component for use in other parts of your application
