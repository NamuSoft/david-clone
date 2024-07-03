import { LinkAtom } from "~/components/Atoms/LinkAtom/LinkAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";

type Props = {
  // Add props here
  img: string;
  name: string;
  bio: string;
  social: string[];
};

export const AuthorBox = (props: Props) => {
  return (
    <div className=' flex flex-col items-center justify-center space-x-6 overflow-hidden  bg-[#fdf9f6] p-8 text-center md:text-left lg:flex-row  lg:p-16'>
      <ResponsiveImgAtom width={254} height={238} src={props.img} alt='' />
      <div className='pt-[30px]'>
        <LinkAtom
          href={"#"}
          className='italiana-regular mb-0 block text-[30px]  font-normal leading-[50px] text-[#1f1f1f] lg:pb-10 lg:text-[40px]'
        >
          {props.name}
        </LinkAtom>
        <p className='mb-4 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f] '>
          {props.bio}
        </p>
        <ul className='flex flex-wrap justify-center space-x-6 md:space-x-6 lg:justify-end'>
          {props.social.map((item, index) => (
            <li className='' key={index}>
              <LinkAtom
                className='space-mono-regular text-[14px] text-[#1f1f1f]'
                href={"#"}
              >
                {item}
              </LinkAtom>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
