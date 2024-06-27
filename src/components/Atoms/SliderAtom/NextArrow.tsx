import React from "react";
import "./custom.css"

type Props = {
  className?: string; // Make className optional
  style?: React.CSSProperties; // Use React.CSSProperties for style
  onClick?: () => void; // onClick function should be optional
};

const NextArrow = (props: Props) => {
  return (
    <div
      className={props.className}
      style={{
          ...props.style,
          display:'block',
          content: `url('/images/right-arrow.png')`,
          right: '46%',
          zIndex: 10,
    transition: "all .3s",
    top: 'auto',
    bottom: '-70px',
        
      }}
      onClick={props.onClick}
    />

  );
};

export default NextArrow; // Export the component for use in other parts of your application
