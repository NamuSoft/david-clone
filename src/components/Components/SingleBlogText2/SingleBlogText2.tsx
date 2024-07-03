import { Col, Row } from "antd";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";

type Props = {
  // Add props here
  title: string;
  p: string;
  img: { src: string; height: number }[];
};

export const SingleBlogText2 = (props: Props) => {
  return (
    <div className='py-[50px]  text-center sm:mb-0 md:text-left'>
      <h2 className=' text-center font-[Italiana] text-[30px] font-normal text-[#1f1f1f] md:text-[45px] lg:text-[60px]'>
        {props.title}
      </h2>
      <p className='mb-4 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f]'>
        {props.p}
      </p>
      <Row gutter={[1.5, 0]}>
        {props.img.map((item, key) => (
          <Col key={key} xs={24} sm={24} md={12} lg={8} xl={8}>
            <ResponsiveImgAtom {...item} width={415} alt='' />
          </Col>
        ))}
      </Row>
    </div>
  );
};
