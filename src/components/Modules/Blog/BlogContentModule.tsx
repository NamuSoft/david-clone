import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import { BlogGrid } from "~/components/Components/BlogGrid/BlogGrid";

type Props = {
  gridProps: React.ComponentProps<typeof BlogGrid>;
};

export const BlogContentModule = (props: Props) => {
  return (
    <div className='bg-white text-[#1f1f1f]'>
      <SectionPaddingAtom
        className='pb-[50px] md:pb-[60px] lg:pb-[90px]
'
      >
        <ContainerAtom>
          <BlogGrid {...props.gridProps} />
        </ContainerAtom>
      </SectionPaddingAtom>
    </div>
  );
};
