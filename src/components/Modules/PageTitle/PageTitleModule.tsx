import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  // Add props here
  pageTitleProps: React.ComponentProps<typeof HeaderAtom>;
};

export const PageTitleModule = (props: Props) => {
  return (
    <section className='page-title  relative z-[1] flex min-h-[300px] flex-col justify-end bg-[#fdf9f6]'>
      <ContainerAtom>
        <div className='flex flex-wrap '>
          <div className='relative max-w-full flex-1 flex-grow px-4 pl-4 pr-4 sm:w-full'>
            <HeaderAtom {...props.pageTitleProps} />
          </div>
        </div>
      </ContainerAtom>
    </section>
  );
};
