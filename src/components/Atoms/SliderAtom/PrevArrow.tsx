import React from "react";
import "./custom.css"

type Props = {
  className?: string; // Make className optional
  style?: React.CSSProperties; // Use React.CSSProperties for style
  onClick?: () => void; // onClick function should be optional
};

const PrevArrow = (props: Props) => {
  return (
    <div
      className={props.className}
      style={{
          ...props.style,
          display:'block',
          content: `url('/images/left-arrow.png')`,
          left: '46%',
          zIndex: 10,
    transition: "all .3s",
    top: 'auto',
    bottom: '-70px',
        
      }}
      onClick={props.onClick}
    />
    //   <div>
    //     <Image
    //       src='/images/left-arrow.png' // Provide a valid image source
    //       alt='Previous' // Provide meaningful alt text
    //       width={40} // Adjust width and height as per your design
    //       height={40}
    //     />
    //   </div>
    // </div>
  );
};

export default PrevArrow; // Export the component for use in other parts of your application
