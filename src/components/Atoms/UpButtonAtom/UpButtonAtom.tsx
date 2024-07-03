import React, { useState, useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

type Props = {
  // Add props here if needed
};

export const UpButtonAtom = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[25px] right-[30px] z-[99] list-none ${isVisible ? "block" : "hidden"}`}
    >
      <div
        className=' block h-[30px] w-[30px] cursor-pointer rounded-[3px] border-[4px] border-[#ff4a3b] bg-[#ff4a3b] text-center text-[#fff] hover:bg-[#ff4a3b] lg:h-[40px] lg:w-[40px]'
        onClick={scrollToTop}
      >
        <ArrowUpOutlined className='text-[15px] lg:text-[20px] my-auto'  />
      </div>
    </div>
  );
};
