import { Col, Form, Input, Row, Select } from "antd";
import "./custom.css";
import TextArea from "antd/es/input/TextArea";

type Props = {
  // Add props here
};

export const ContactForm = (props: Props) => {
  return (
    <div>
      <Form>
        <Row gutter={[20, 0]}>
          <Col xs={24} sm={24} md={12}>
            <div className='form-area mb-[30px]'>
              <Input
                placeholder='your name'
                type='text'
                name='name'
                className='form-control'
                required
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className='form-area mb-[30px]'>
              <Input
                placeholder='your email'
                type='email'
                name='email'
                className='form-control'
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className='form-area mb-[30px]'>
              <Input
                placeholder='your phone'
                type='phone'
                name='phone'
                className='form-control'
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className='form-area mb-[30px]'>
              <Select
                placeholder='your email'
                className='form-control'
                options={[
                  { value: 0, label: "choose a service" },
                  { value: 1, label: "web Designg" },
                  { value: 2, label: "web Development" },
                  { value: 3, label: "marketting" },
                ]}
              />
            </div>
          </Col>
          <Col xs={24}>
            <div className='form-area mb-[30px]'>
              <TextArea
                placeholder='message'
                name='message'
                className='form-control'
              />
            </div>
          </Col>
        </Row>
        <div className='submit-area flex justify-center lg:justify-start'>
          <button type='submit' className='btn-style-2'>
            send
          </button>
        </div>
      </Form>
    </div>
  );
};




