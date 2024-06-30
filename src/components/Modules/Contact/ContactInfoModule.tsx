import { Col, Row } from "antd";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import { ContactForm } from "~/components/Components/ContactForm/ContactForm";
import { OfficeInfo } from "~/components/Components/OfficeInfo/OfficeInfo";

type Props = {
  title: string;
  subTitle: string;
  officeData: React.ComponentProps<typeof OfficeInfo>;
};

export const ContactInfoModule = (props: Props) => {
  return (
    <SectionPaddingAtom className=' bg-white pb-[90px]  sm:pb-[50px] md:pb-[60px]'>
      <ContainerAtom>
        <RowAtom className=''>
          <div className='pl-4 pr-4 lg:w-3/4'>
            <div className='mb-[60px] box-border block text-center md:text-left'>
              <span className='space-mono-regular block text-[16px] not-italic leading-normal tracking-[8px] text-[#1f1f1f]  sm:tracking-[4px]'>
                {" "}
                {props.subTitle}
              </span>
              <h1 className='text-[35px] leading-[normal] text-[#1f1f1f] sm:mt-0 md:text-[50px] lg:text-[60px] xl:text-[70px]'>
                {props.title}
              </h1>
            </div>
          </div>
        </RowAtom>
        <Row gutter={[0, 20]} justify={"center"}>
          <Col lg={12} md={24}>
            <OfficeInfo {...props.officeData} />
          </Col>
          <Col lg={12} md={24}>
            <ContactForm />
          </Col>
        </Row>
      </ContainerAtom>
    </SectionPaddingAtom>
  );
};
