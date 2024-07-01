import "./custom.css";
import { ResponsiveImgAtom } from "../ResponsiveImgAtom/ResponsiveImgAtom";

type Props = {
  icon?: string;
  title: string;
  date: string;
};

export const EventItemAtom = (props: Props) => {
  return (
    <div className='event-item '>
      {props.icon && (
        <div className='icon '>
          <ResponsiveImgAtom
            src={props.icon}
            alt=''
            width={30}
            height={34}
            className='z-10 mx-auto'
          />
        </div>
      )}
      <div className='text'>
        <h4>{props.title}</h4>
        <span>{props.date}</span>
      </div>
    </div>
  );
};
