import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import "./custom.css";
import Link from "next/link";

type Props = {
  // Add props here
};

export const LowerFooter = (props: Props) => {
  return (
    <ContainerAtom>
      <div className='ft space-mono-regular flex flex-col items-center justify-center md:flex-row'>
        <div className='relative w-full max-w-full flex-1 flex-grow px-4 md:w-full lg:w-1/2'>
          <ul className='lower-footer-link flex justify-center md:justify-start'>
            <li className='mr-4'>
              <Link href='/contact'>Privacy &amp; Terms.</Link>
            </li>
            <li>
              <Link href='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='relative w-full max-w-full flex-1 flex-grow px-4 md:w-full lg:w-1/2'>
          <div className='copy-right flex justify-center md:justify-end'>
            <p className='copyright space-mono-regular text-center md:text-left'>
              © 2023 <Link href='/index'>Unded</Link>, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </ContainerAtom>
  );
};
