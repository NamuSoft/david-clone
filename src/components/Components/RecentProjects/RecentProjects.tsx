import { Col, Row } from "antd";
import React from "react";
import { LinkAtom } from "~/components/Atoms/LinkAtom/LinkAtom";
import { ProjectItemAtom } from "~/components/Atoms/ProjectItemAtom/ProjectItemAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import { SectionTitleAtom } from "~/components/Atoms/SectionTitleAtom/SectionTitleAtom";

type Props = {
  // Add props here
  title: React.ComponentProps<typeof SectionTitleAtom>;
  data: React.ComponentProps<typeof ProjectItemAtom>[];
};

export const RecentProjects = (props: Props) => {
  return (
    <div>
      <SectionTitleAtom {...props.title} className='relative text-[#1f1f1f]' />
      <div className=''>
        <Row gutter={[16, 16]}>
          {props.data.slice(0, 3).map((item, index) => (
            <Col lg={8} md={12} sm={24} xs={24} key={index}>
              <div className='project-item'>
                <ResponsiveImgAtom {...item.image} />
                <div className='proect-text pt-[30px]'>
                  <h2 className="mb-[15px] mt-0 font-['Italiana'] text-[calc(1.325rem_+_.9vw)] font-normal leading-[1.2] text-[#1f1f1f]">
                    <LinkAtom href={`/project_single/${item.link}`}>
                      {item.title}
                    </LinkAtom>
                  </h2>
                  <span className='text-[16px] font-normal not-italic leading-[29px] text-[#1f1f1f]'>
                    {item.subTitle}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
