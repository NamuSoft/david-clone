import { Breadcrumb } from "antd";
import { ContainerAtom } from "../ContainerAtom/ContainerAtom";
import "./custom.css";

type Props = {
  // Add props here
  title: string;
  nav: [string, string, string];
};

export const HeaderAtom = (props: Props) => {
  return (
    <section className='page-title '>
      <ContainerAtom>
        <div className='flex flex-wrap '>
          <div className='relative max-w-full flex-1 flex-grow px-4 pl-4 pr-4 sm:w-full'>
            <div className='breadcumb-wrap'>
              <h2 className=''>{props.title}</h2>
              <Breadcrumb
                items={[
                  {
                    title: props.nav[0],
                  },
                  {
                    title: <a href={props.nav[2]}>{props.nav[1]}</a>,
                  },
                ]}
                className='space-mono-regular '
              />
            </div>
          </div>
        </div>
      </ContainerAtom>
    </section>
  );
};
