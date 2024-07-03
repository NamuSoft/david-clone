import { Col, Row } from "antd";
import { LinkAtom } from "~/components/Atoms/LinkAtom/LinkAtom";

type Props = {
  // Add props here
  tags: string[];
  social: string[];
};

export const TagShare = (props: Props) => {
  return (
    <div className='pb-[50px] pt-[30px]'>
      <Row>
        <Col lg={14} md={24} sm={24}>
          <div className='flex flex-wrap items-center'>
            <h3 className='text-[20px] font-normal leading-[50px] sm:mr-5 sm:text-[20px] lg:mr-20 lg:text-[40px]'>
              Tags :{"  "}
            </h3>
            <ul className='flex flex-wrap space-x-1 md:space-x-6'>
              {props.tags.map((item, index) => (
                <li className='' key={index}>
                  <LinkAtom
                    className='space-mono-regular text-[14px] text-[#1f1f1f]'
                    href={"#"}
                  >
                    {item}
                  </LinkAtom>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col lg={10} md={24} sm={24}>
          <div className='tag-share flex flex-wrap items-center  '>
            <h3 className='text-[20px] font-normal leading-[50px] sm:mr-5 sm:text-[20px] lg:mr-20 lg:text-[40px]'>
              Tags :{"  "}
            </h3>
            <ul className='flex flex-wrap space-x-3 md:space-x-6'>
              {props.social.map((item, index) => (
                <li className='' key={index}>
                  <LinkAtom
                    className='space-mono-regular text-[14px] text-[#1f1f1f]'
                    href={"#"}
                  >
                    {item}
                  </LinkAtom>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};
