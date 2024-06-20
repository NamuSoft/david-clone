import { Breadcrumb } from "antd";

type Props = {
  // Add props here
};

export const HeaderAtom = (props: Props) => {
  return (
    <>
      <section className="page-title  relative flex min-h-[300px] justify-center bg-[#fdf9f6] align-bottom">
        <div className="container  max-w-[960px]">
          <div className="row">
            <div className="col col-xs-12">
              <div className="breadcumb-wrap pb-[30px]">
                <h2 className="mb-[25px] justify-self-start text-[80px] font-normal leading-normal text-[#1f1f1f]">
                  Home
                </h2>
                <Breadcrumb
                  items={[
                    {
                      title: "Home",
                    },
                    {
                      title: <a href="">Application Center</a>,
                    },

                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
