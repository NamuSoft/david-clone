import { Row, Col } from "antd";
import React from "react";
import { BlogAtom } from "~/components/Atoms/BlogAtom/BlogAtom";

type Props = {
  data: React.ComponentProps<typeof BlogAtom>[];
};

export const BlogItems = (props: Props) => {
  return (
    <div className='blog-items'>
      <Row gutter={[16, 16]}>
        {props.data.map((item, index) => (
          <React.Fragment key={index}>
            <Col
              xs={24} // 1 column on extra small screens
              sm={24} // 1 column on small screens
              md={12} // 2 columns on medium screens
              lg={8} // 3 columns on large screens
              xl={8} // 3 columns on extra large screens
            >
              <div className='relative w-full max-w-full flex-1 flex-grow px-4'>
                <BlogAtom {...item} />
              </div>
              {index < props.data.length - 1 && (
                <div
                  className={`absolute right-0 top-0 hidden h-full w-[1px] bg-[#757575] lg:block ${index < props.data.length - 1 && index % 2 == 0 && "md:block"}`}
                ></div>
              )}
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
};
