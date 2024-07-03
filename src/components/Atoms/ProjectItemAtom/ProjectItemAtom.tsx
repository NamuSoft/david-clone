import { ArrowBtnAtom } from "../ArrowBtnAtom/ArrowBtnAtom";
import { LinkAtom } from "../LinkAtom/LinkAtom";
import { ResponsiveImgAtom } from "../ResponsiveImgAtom/ResponsiveImgAtom";
import { SlideUpAnimationAtom } from "../SlideUpAnimationAtom/SlideUpAnimationAtom";

type Props = {
  // Add props here
  image: {
    src: string;
    width: number;
    height: number;
    className?: string;
    alt: string;
  };
  link: string;
  title: string;
  subTitle: string;
};

export const ProjectItemAtom = (props: Props) => {
  return (
    <SlideUpAnimationAtom>
      <div className='project-item'>
        <div className=''>
          <ResponsiveImgAtom {...props.image} className=' rounded-xl' />
        </div>
        <div className='project-text flex justify-between py-5'>
          <div className='project-left'>
            <h2 className="mb-[0.5rem] mt-0 font-['Italiana'] text-[calc(1.325rem_+_.9vw)] font-normal leading-[1.2] text-[#1f1f1f]">
              <LinkAtom href={`/project_single/${props.link}`}>
                {props.title}
              </LinkAtom>
            </h2>
            <span className='text-[16px] font-normal not-italic leading-[29px] text-[#ff4a3b]'>
              {props.subTitle}
            </span>
          </div>
          <div className='project-right '>
            <ArrowBtnAtom href={`/project_single/${props.link}`} />
          </div>
        </div>
      </div>
    </SlideUpAnimationAtom>
  );
};
