import { Breadcrumb } from "antd";

type Props = {
  // Add props here
};

export const HeaderAtom = (props: Props) => {
  return (
    <section className='page-title relative flex min-h-[300px] justify-center bg-[#fdf9f6]'>
      <div className='container flex max-w-[960px] flex-col justify-end pb-[30px]'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='breadcumb-wrap'>
              <h2 className='mb-[25px] text-[80px] font-normal leading-normal text-[#1f1f1f]'>
                Home
              </h2>
              <Breadcrumb
                items={[
                  {
                    title: "Home",
                  },
                  {
                    title: <a href=''>Application Center</a>,
                  },
                ]}
                className='space-mono-regular text-lg base-black '
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
