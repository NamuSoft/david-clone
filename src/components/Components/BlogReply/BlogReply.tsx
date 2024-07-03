import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

type Props = {
  // Add props here
};

export const BlogReply = (props: Props) => {
  return (
    <div className='mt-[70px] max-w-[856px] text-center lg:text-left'>
      <h3 className='text-[40px] font-normal leading-normal sm:text-[30px] md:text-[60px]'>
        Leave a Reply
      </h3>
      <p className='mb-5 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f] lg:mb-10'>
        Your email address will not be published. Required fields are marked *
      </p>
      <Form>
        <Row gutter={[20, 0]}>
          <Col xs={24}>
            <p className='mb-0 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f] lg:mb-4'>
              your Comment *
            </p>
            <div className='form-area mb-[30px]'>
              <TextArea
                rows={6}
                placeholder=''
                name='message'
                className='form-control'
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className='form-area mb-[30px]'>
              <p className='mb-0 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f] lg:mb-4'>
                your name *
              </p>
              <Input
                placeholder=''
                type='text'
                name='name'
                className='form-control'
                required
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <p className='mb-0 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f] lg:mb-4'>
              your email *
            </p>
            <div className='form-area mb-[30px]'>
              <Input type='email' name='email' className='form-control' />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <p className='mb-0 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f] lg:mb-4'>
              your website *
            </p>
            <div className='form-area mb-[30px]'>
              <Input type='text' name='website' className='form-control' />
            </div>
          </Col>
        </Row>
        <div className='submit-area flex justify-center lg:justify-start'>
          <button type='submit' className='btn-style-2'>
            Post Comment
          </button>
        </div>
      </Form>
      ;
    </div>
  );
};
