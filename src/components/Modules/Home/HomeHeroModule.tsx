import { ArrowDownOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

// Define the Props type, including additional props if needed
type Props = {
  title: string;
  // Uncomment and use these props if needed
  // navBarProps?: React.ComponentProps<typeof NavBarAtom>;
  // drawerProps?: React.ComponentProps<typeof DrawerAtom>;
  // sideDrawerProps?: React.ComponentProps<typeof SideDrawerAtom>;
};

// HomeHeroModule functional component
export const HomeHeroModule = (props: Props) => {
  return (
    <div className=' mx-auto px-[70px] '>
      <div className='container-fluid mx-4'>
        <div className='relative bg-[#ff4a3b]  px-24  pb-24  pt-20'>
          <div className='flex flex-col items-center  align-middle lg:flex-row'>
            <div className='w-full  pl-4 pr-4  lg:w-3/5 xl:w-2/3'>
              <div className='pt-[60px]'>
                <div className='css-z1mjt4' style={{ animationDelay: "0ms" }}>
                  <div className='sub-title  space-mono-regular text-2xl font-normal not-italic leading-[normal] text-[#fff]'>
                    <span>Always Inovative</span>
                  </div>
                </div>

                <div className='css-z1mjt4' style={{ animationDelay: "0ms" }}>
                  <h2 className='italiana-regular font-italiana text-h2-xl leading-h2-xl 1500px:text-h2-lg 1500px:leading-h2-lg mb-7 mt-5 font-normal text-white '>
                    Your Design our Solution
                  </h2>
                </div>

                <div className='css-z1mjt4' style={{ animationDelay: "0ms" }}>
                  <p className='flex flex-row  pb-4 '>
                    <i className=' mr-[10px]'>
                      <Image
                        alt=''
                        src='https://unded-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.bbdad56b.png&amp;w=48&amp;q=75'
                        width={24}
                        height={25}
                        decoding='async'
                        data-nimg='1'
                        loading='lazy'
                        style={{ color: "transparent" }}
                        className='rotate'
                      />
                    </i>{" "}
                    <span className='space-mono-regular max-w-[38.44rem] text-base font-normal not-italic leading-[1.81rem] tracking-[.68px] text-[#fff]'>
                      We are helping client to create WordPress websites with
                      our talented expert. Quam nulla porttitor massa id neque.
                      Est placerat in egestas.
                    </span>
                  </p>
                </div>

                <div className='css-z1mjt4' style={{ animationDelay: "0ms" }}>
                  <div className='hero-btn'>
                    <a href='#service'>
                      <button className='fancy-btn italiana-regular cursor-pointer'>
                        Read case study <ArrowDownOutlined />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='pl-4  pr-4 lg:w-2/5 xl:w-1/3'>
              <div className='right-image relative z-[1]'>
                <div className='right-image-mask'>
                  <Image
                    alt=''
                    src='https://unded-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmask-1.7aad7307.jpg&amp;w=828&amp;q=75'
                    width='380'
                    height='603'
                    decoding='async'
                    data-nimg='1'
                    loading='lazy'
                    style={{ color: "transparent", width: "100%" }}
                  />
                </div>
                <div className='back-shape absolute bottom-[-130px] right-[-70px] z-[-1]  xl:max-w-[70%]'>
                  <div
                    className='css-17ud6we'
                    style={{ animationDelay: "0ms" }}
                  >
                    <Image
                      src='https://unded-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fback-shape.50f1ac37.png&amp;w=750&amp;q=75'
                      width='326'
                      height='331'
                      decoding='async'
                      data-nimg='1'
                      className=''
                      loading='lazy'
                      style={{ color: "transparent" }}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hero-bottom-shape absolute bottom-[-110px] left-0 w-full '>
            <svg
              width='100%'
              height='175'
              viewBox='0 0 1760 175'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1760 0H0V175C684 6 1388.21 57.1384 1760 175V0Z'
                fill='#FF4A3B'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
