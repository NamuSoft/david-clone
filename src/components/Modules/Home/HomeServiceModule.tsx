import { ArrowDownOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

// Define the Props type, including additional props if needed
type Props = {
  // title: string;
  // Uncomment and use these props if needed
  // navBarProps?: React.ComponentProps<typeof NavBarAtom>;
  // drawerProps?: React.ComponentProps<typeof DrawerAtom>;
  // sideDrawerProps?: React.ComponentProps<typeof SideDrawerAtom>;
};

// HomeHeroModule functional component
export const HomeServiceModule = (props: Props) => {
  return (
    <div className=' mx-auto py-[200px] pb-[80px] xl:max-w-[1400px]'>
      <div className='container mx-4 '>
        <div className='flex flex-col items-center  align-middle lg:flex-row'>
          <div className='lg:w-1/2'>
            <div className='pr-[75px]'>
              <span className='space-mono-regular mb-3 block text-base font-normal not-italic leading-[1.81rem] tracking-[8px] text-[#fff]'>
                Accusamus Et Iust
              </span>
              <h2 className='italiana-regular relative pb-[10px] text-[60px] leading-[normal] text-white  lg:text-[65px] xl:text-[80px]'>
                The way we do things in our line of work.
                <i className=' inline-block max-w-[60px]   md:relative xl:bottom-[-10px] xl:left-[-10px] xl:max-w-full'>
                  <Image
                    alt=''
                    src='https://unded-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-shape.c2d2695e.png&amp;w=256&amp;q=75'
                    width='123'
                    height='118'
                    decoding='async'
                    data-nimg='1'
                    loading='lazy'
                    style={{
                      color: "transparent",
                      verticalAlign: "middle",
                      display: "inline-block",
                    }}
                  />
                </i>
              </h2>
              <p className='space-mono-regular mb-[30px]  text-base font-normal not-italic leading-[1.81rem] tracking-[.68px] text-[#fff] '>
                We are helping client to create WordPress websites with our
                talented expert.
              </p>
              <a
                className='read-more italiana-regular  text-base font-normal not-italic leading-[1.81rem] tracking-[.68px] text-[#fff] '
                href='/services'
              >
                Read case study <ArrowRightOutlined className='inline' />
              </a>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <div className='flex flex-wrap '>
              <div className='flex basis-full flex-col md:basis-1/2'>
                <div className='css-z1mjt4' style={{ animationDelay: "0ms" }}>
                  <div className='service-item mb-[30px]'>
                    <i>
                      <Image
                        alt=''
                        src='https://unded-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-1.00034dab.png&amp;w=256&amp;q=75'
                        width='100'
                        height='57'
                        decoding='async'
                        data-nimg='1'
                        loading='lazy'
                        style={{ color: "transparent" }}
                      />
                    </i>
                    <h2 className=' mb-[20px] mt-[25px]'>
                      <a
                        href='/service-single/Web-UI-UX-Design'
                        className='italiana-regular text-[22px] text-white  md:text-[25px]  lg:text-[2rem]'
                      >
                        Web UI/UX Design
                      </a>
                    </h2>
                    <p className='space-mono-regular mb-[30px] max-w-[290px] text-base font-normal not-italic leading-[1.81rem] tracking-[.68px] text-[#fff]'>
                      We are helping client to create WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex basis-full flex-col md:basis-1/2'>
                <div className='css-z1mjt4' style={{ animationDelay: "0ms" }}>
                  <div className='service-item mb-[30px] mt-[20px]'>
                    <i>
                      <Image
                        alt=''
                        src='https://unded-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-2.2cc456ef.png&w=256&q=75'
                        width='100'
                        height='57'
                        decoding='async'
                        data-nimg='1'
                        loading='lazy'
                        style={{ color: "transparent" }}
                      />
                    </i>
                    <h2 className=' mb-[20px] mt-[25px]'>
                      <a
                        href='/service-single/Web-UI-UX-Design'
                        className='italiana-regular  text-[22px] text-white  md:text-[25px]  lg:text-[2rem] '
                      >
                        Mobile UI/UX Design
                      </a>
                    </h2>
                    <p className='space-mono-regular mb-[30px] max-w-[290px] text-base font-normal not-italic leading-[1.81rem] tracking-[.68px] text-[#fff]'>
                      We are helping client to create WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex basis-full flex-col md:basis-1/2'>
                <div className='css-z1mjt4' style={{ animationDelay: "0ms" }}>
                  <div className='service-item mb-[30px]'>
                    <i>
                      <Image
                        alt=''
                        src='https://unded-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-3.6008c0ec.png&w=256&q=75'
                        width='100'
                        height='57'
                        decoding='async'
                        data-nimg='1'
                        loading='lazy'
                        style={{ color: "transparent" }}
                      />
                    </i>
                    <h2 className=' mb-[20px] mt-[25px]'>
                      <a
                        href='/service-single/Web-UI-UX-Design'
                        className='italiana-regular text-[22px]  text-white  md:text-[25px] lg:text-[2rem] '
                      >
                        Branding Design
                      </a>
                    </h2>
                    <p className='space-mono-regular mb-[30px] max-w-[290px] text-base font-normal not-italic leading-[1.81rem] tracking-[.68px] text-[#fff]'>
                      We are helping client to create WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex  basis-full flex-col md:basis-1/2'>
                <div className='css-z1mjt4' style={{ animationDelay: "0ms" }}>
                  <div className='service-item mb-[30px] mt-[20px]'>
                    <i>
                      <Image
                        alt=''
                        src='https://unded-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-4.20aab2a8.png&w=256&q=75'
                        width='100'
                        height='57'
                        decoding='async'
                        data-nimg='1'
                        loading='lazy'
                        style={{ color: "transparent" }}
                      />
                    </i>
                    <h2 className=' mb-[20px] mt-[25px]'>
                      <a
                        href='/service-single/Web-UI-UX-Design'
                        className='italiana-regular text-[22px]  text-white  md:text-[25px] lg:text-[2rem] '
                      >
                        Creative Design
                      </a>
                    </h2>
                    <p className='space-mono-regular mb-[30px] max-w-[290px] text-base font-normal not-italic leading-[1.81rem] tracking-[.68px] text-[#fff]'>
                      We are helping client to create WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
