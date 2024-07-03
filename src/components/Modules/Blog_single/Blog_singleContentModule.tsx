import { Col, Row } from "antd";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import { AuthorBox } from "~/components/Components/AuthorBox/AuthorBox";
import { type Blog } from "~/components/Components/BlogGrid/BlogGrid";
import { BlogReply } from "~/components/Components/BlogReply/BlogReply";
import { SingleBlogText } from "~/components/Components/SingleBlogText/SingleBlogText";
import { SingleBlogText2 } from "~/components/Components/SingleBlogText2/SingleBlogText2";
import { TagShare } from "~/components/Components/TagShare/TagShare";

export type CommonBlog = {
  qoute: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  title2: string;
  p5: string;
  p6: string;
  img: { src: string; height: number }[];
  social: string[];
  tags: string[];
  author: {
    img: string;
    name: string;
    bio: string;
  };
};
type Props = {
  blog: Blog;
  common: CommonBlog;
};

export const Blog_singleContentModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='blog-single-area bg-white'>
      <ContainerAtom>
        <Row>
          <Col xs={24} lg={24}>
            <div className='space-y-8 text-center'>
              <ResponsiveImgAtom
                src={props.blog.img}
                width={1300}
                height={650}
                alt=''
              />
              <SingleBlogText
                p1={props.common.p1}
                p2={props.common.p2}
                p3={props.common.p3}
                p4={props.common.p4}
                qoute={props.common.qoute}
                title={props.blog.title}
                subtitle={props.blog.subtitle}
              />
              <SingleBlogText2
                title={props.common.title2}
                p={props.common.p5}
                img={props.common.img}
              />
              <p className='mb-4 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f] '>
                {props.common.p6}
              </p>
              <TagShare social={props.common.social} tags={props.common.tags} />
              <AuthorBox
                {...props.common.author}
                social={props.common.social}
              />
              <BlogReply />
            </div>
          </Col>
        </Row>
      </ContainerAtom>
    </SectionPaddingAtom>
  );
};
