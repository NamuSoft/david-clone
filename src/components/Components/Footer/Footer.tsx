import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import "./custom.css";
import Image from "next/image";
import {
  ArrowRightOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import type * as svgs from "public/svgs";
import { Input } from "antd";

type Props = {
  // Add props here
  logo: keyof typeof svgs;
};

export const Footer = (props: Props) => {
  return (
    <ContainerAtom>
      <div className='row text-white'>
        <div className='grid grid-cols-12 gap-4'>
          <div className=' col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3'>
            <div className='widget about-widget'>
              <div className='logo widget-title'>
                <SVGAtom iconName={props.logo} width={195} height={62} />
              </div>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4'>
            <div className='widget link-widget'>
              <div className='widget-title'>
                <h3> Address</h3>
              </div>
              <div className='contact-ft space-mono-regular '>
                <ul>
                  <li>
                    <PhoneOutlined /> + 1 (246) 333-0088
                  </li>
                  <li>
                    <MailOutlined /> alma.lawson@example.com
                  </li>
                  <li>
                    <HomeOutlined /> 4140 Parker Rd. Allentown,
                    <br /> New Mexico 31134
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-2'>
            <div className='widget link-widget'>
              <div className='widget-title'>
                <h3>Follow Us</h3>
              </div>
              <ul className='space-mono-regular'>
                <li>
                  <a href='/'>Behance</a>
                </li>
                <li>
                  <a href='/'>Instagram</a>
                </li>
                <li>
                  <a href='/'>Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3'>
            <div className='widget subscribe'>
              <div className='widget-title'>
                <h3>Subscribe</h3>
              </div>
              <form>
                <div className='form-field'>
                  <Input
                    type='email'
                    placeholder='Your e-mail address'
                    id='semail'
                    required
                  />
                  <button type='submit' className=' cursor-pointer'>
                    <ArrowRightOutlined />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
      </div>
    </ContainerAtom>
  );
};
