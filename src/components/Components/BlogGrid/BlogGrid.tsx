import { Col, Row } from "antd";
import { LinkAtom } from "~/components/Atoms/LinkAtom/LinkAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";

export type Blog = {
  img: string;
  subtitle: string;
  title: string;
  body: string;
  link: string;
};
type Props = {
  // Add props here
  data: Blog[];
};

export const BlogGrid = (props: Props) => {
  return (
    <Row gutter={[16, 16]}>
      {props.data.map((blog, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={8}>
          <div className='mb-30 text-center  md:text-left'>
            <ResponsiveImgAtom
              src={blog.img}
              width={415}
              height={300}
              alt=''
              className=' mb-5'
            />
            <div className='blog-content'>
              <span className='space-mono-regular text-[16px] font-normal leading-[29px] '>
                {blog.subtitle}
              </span>
              <h2 className='.text-[28px] mb-5 mt-2  font-normal  leading-normal lg:text-[30px] '>
                <LinkAtom href={blog.link}>{blog.title}</LinkAtom>
              </h2>
              <p className='text-[16px] font-normal leading-[29px]'>
                {blog.body}
              </p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
