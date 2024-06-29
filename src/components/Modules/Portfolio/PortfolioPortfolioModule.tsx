import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { ProjectItemAtom } from "~/components/Atoms/ProjectItemAtom/ProjectItemAtom";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import { TwoColGridAtom } from "~/components/Atoms/TwoColGridAtom/TwoColGridAtom";

type Props = {
  data: React.ComponentProps<typeof ProjectItemAtom>[];
};

export const PortfolioPortfolioModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='project-section-2'>
      <ContainerAtom>
        <RowAtom className=''>
          <div className='sortable-gallery relative max-w-full flex-1 flex-grow px-4 pl-4 pr-4 sm:w-full '>
            <div className=' flex justify-center'>
              <TwoColGridAtom
                data={props.data}
                className=''
                childClassName={[``, ``]}
                Atom={ProjectItemAtom}
              />
            </div>
          </div>
        </RowAtom>
      </ContainerAtom>
    </SectionPaddingAtom>
  );
};
