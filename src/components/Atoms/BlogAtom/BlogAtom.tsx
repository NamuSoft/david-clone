import { ArrowRightOutlined } from "@ant-design/icons";
import { LinkAtom } from "../LinkAtom/LinkAtom";
import "./custom.css";

type Props = {
  // Add props here
  subtitle: string;
  title: string;
  link: string;
  body: string;
};

export const BlogAtom = (props: Props) => {
  return (
    <div className='blog-item relative text-center md:text-left md:text-left'>
      <div className='blog-content'>
        <span className='space-mono-regular  space-mono-regular text-[16px] font-normal not-italic leading-[29px] text-white '>
          {props.subtitle}
        </span>
        <h2 className="my-[10px] mb-[20px] mt-[5px] font-['Italiana'] text-[28px] font-normal not-italic leading-normal text-white md:text-[30px]">
          <LinkAtom className='text-white' href={props.link}>
            {props.title}
          </LinkAtom>
        </h2>
        <p className=' space-mono-regular  pb-4 text-[16px] font-normal not-italic leading-[29px] text-white '>
          {props.body}
        </p>
        <LinkAtom className='read-more' href={props.link}>
          read - more
          <ArrowRightOutlined />
        </LinkAtom>
      </div>
    </div>
  );
};
