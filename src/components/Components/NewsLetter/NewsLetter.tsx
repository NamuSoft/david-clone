import { Col, Row } from "antd";
import { InputAtom } from "~/components/Atoms/InputAtom/InputAtom";

type Props = {
  // Add props here
  subtitle: string;
  title: string;
};

export const NewsLetter = (props: Props) => {
  return (
    <Row justify='center'>
      <Col xs={24} md={24} lg={18}>
        <div className='section-title mb-[40px] text-center'>
          <span className='block text-[15px]  not-italic leading-normal tracking-[4px] text-[#1f1f1f]  md:text-[16px] md:tracking-[8px]'>
            {props.subtitle}
          </span>
          <h2 className=' text-[35px] text-[#1f1f1f] sm:text-[50px]  md:text-[60px] lg:text-[70px]'>
            {props.title}
          </h2>
        </div>
      </Col>
      <Col xs={24} md={24} lg={12}>
        <div className='newsletter-form'>
          <InputAtom />
        </div>
      </Col>
    </Row>
  );
};
