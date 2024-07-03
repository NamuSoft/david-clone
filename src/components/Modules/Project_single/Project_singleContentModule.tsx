import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import { SectionTitleAtom } from "~/components/Atoms/SectionTitleAtom/SectionTitleAtom";
import { ProjectDetails } from "~/components/Components/ProjectDetails/ProjectDetails";
import { RecentProjects } from "~/components/Components/RecentProjects/RecentProjects";

type Props = {
  details: React.ComponentProps<typeof ProjectDetails>;
  recent: React.ComponentProps<typeof RecentProjects>;
};

export const Project_singleContentModule = (props: Props) => {
  return (
    <div className='bg-white'>
      <SectionPaddingAtom className='pb-0 ' style={{ paddingBottom: 0 }}>
        <ContainerAtom>
          <ProjectDetails {...props.details} />
        </ContainerAtom>
      </SectionPaddingAtom>
      <SectionPaddingAtom className='pt-0'>
        <ContainerAtom>
          <RecentProjects {...props.recent} />
        </ContainerAtom>
      </SectionPaddingAtom>
    </div>
  );
};
