import type { PropsWithChildren } from "react";
import "./custom.css"; // Import CSS module

type Props = {
  //
};

export const MarqueeAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div className='animate-marque-sec'>
      <div className='animate-marque'>
        <div className='marquee'>
          <div className='track'>
            <div className='content'>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
