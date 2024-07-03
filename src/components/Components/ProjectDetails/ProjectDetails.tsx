import { Col, Row } from "antd";
import { LinkAtom } from "~/components/Atoms/LinkAtom/LinkAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import { type ProjectItem } from "~/data/projects/ProjectsData";

type Props = {
  // Add props here
  data: ProjectItem | undefined;
};

export const ProjectDetails = (props: Props) => {
  return (
    props.data && (
      <Row align='middle' gutter={[16, 16]} className=' items-center'>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
          <ResponsiveImgAtom {...props.data.img} className=' rounded-xl' />
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
          <div className='mt-[30px] md:mt-0'>
            <h2 className='italiana-regular mb-5 text-[40px] font-normal text-[#1f1f1f] md:text-[50px] lg:text-[80px]'>
              {props.data.name}
            </h2>
            <div className='flex flex-wrap'>
              <div className='mb-8 basis-1/2'>
                <h4 className='space-mono-regular mb-2 mt-0 text-[18px] font-bold uppercase leading-[29px] text-[#1f1f1f]'>
                  Client:
                </h4>
                <span className='space-mono-regular text-[16px] font-normal leading-[29px] md:text-[13px]'>
                  {props.data.client}
                </span>
              </div>
              <div className='mb-8 basis-1/2'>
                <h4 className='space-mono-regular mb-2 mt-0 text-[18px] font-bold uppercase leading-[29px] text-[#1f1f1f]'>
                  Designer:
                </h4>
                <span className='space-mono-regular text-[16px] font-normal leading-[29px] md:text-[13px]'>
                  {props.data.designer}
                </span>
              </div>
              <div className='mb-8 basis-1/2'>
                <h4 className='space-mono-regular mb-2 mt-0 text-[18px] font-bold uppercase leading-[29px] text-[#1f1f1f]'>
                  Category:
                </h4>
                <span className='space-mono-regular text-[16px] font-normal leading-[29px] md:text-[13px]'>
                  {props.data.category}
                </span>
              </div>
              <div className='mb-8 basis-1/2'>
                <h4 className='space-mono-regular mb-2 mt-0 text-[18px] font-bold uppercase leading-[29px] text-[#1f1f1f]'>
                  share:
                </h4>
                <div className='flex'>
                  {props.data.share.map((item, index) => (
                    <LinkAtom
                      href={""}
                      key={index}
                      className='block text-[16px] font-normal leading-[29px] text-[#1f1f1f]'
                    >
                      {item}
                    </LinkAtom>
                  ))}
                </div>
              </div>
            </div>

            <p className='mb-0 mt-0 text-[16px] leading-[1.8em] text-[#1f1f1f] lg:text-[15px]'>
              {props.data.info}
            </p>
          </div>
        </Col>
      </Row>
    )
  );
};
