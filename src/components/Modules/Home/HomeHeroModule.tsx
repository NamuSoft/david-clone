import { ArrowDownOutlined } from "@ant-design/icons";
import Image from "next/image";
import "./custom.css";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
import { SlideUpAnimationAtom } from "~/components/Atoms/SlideUpAnimationAtom/SlideUpAnimationAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
type Props = {
  title: string;
  subtitle: string;
  content: string;
  cta: string;
};

export const HomeHeroModule = (props: Props) => {
  return (
    <div className='static-hero '>
      <div className='static-hero-wrap'>
        <div className='container-fluid'>
          <RowAtom className=' items-center'>
            <div className='w-full pl-4 pr-4 lg:w-3/5 xl:w-2/3'>
              <div className='static-hero-text'>
                <SlideUpAnimationAtom>
                  <div className='sub-title space-mono-regular '>
                    <span>{props.subtitle}</span>
                  </div>
                </SlideUpAnimationAtom>

                <SlideUpAnimationAtom>
                  <h2 className='italiana-regular '>{props.title}</h2>
                </SlideUpAnimationAtom>

                <SlideUpAnimationAtom>
                  <p className='space-mono-regular  '>
                    <ResponsiveImgAtom
                      alt=''
                      src='/images/spinner.png'
                      width={24}
                      height={25}
                      className='rotate  mr-[10px]'
                    />
                    {props.content}
                  </p>
                </SlideUpAnimationAtom>

                <SlideUpAnimationAtom>
                  <div className='hero-btn'>
                    <a href='#service'>
                      <button className='fancy-btn italiana-regular cursor-pointer'>
                        {props.cta} <ArrowDownOutlined />
                      </button>
                    </a>
                  </div>
                </SlideUpAnimationAtom>
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
          </RowAtom>
        </div>

        <div className='hero-bottom-shape absolute bottom-[-110px] left-0 block  w-full'>
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
  );
};
