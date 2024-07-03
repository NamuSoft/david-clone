import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";

type Props = {
  title: string;
};

export const Blog_singleContentModule = (props: Props) => {
  return <SectionPaddingAtom className='blog-single-area'></SectionPaddingAtom>;
};
