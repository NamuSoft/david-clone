import { ContainerFluidAtom } from "~/components/Atoms/ContainerFluidAtom/ContainerFluidAtom";
import { SectionFluidAtom } from "~/components/Atoms/SectionFluidAtom/SectionFluidAtom";
import { HomeProjectComponent } from "~/components/Components/HomeProjectComponents/HomeProjectComponent";
import "./custom.css";
type Props = {
  title?: string;
  projectComponentProp: React.ComponentProps<typeof HomeProjectComponent>;
};

export const HomeProjectModule = (props: Props) => {
  return (
    <SectionFluidAtom>
      <ContainerFluidAtom>
        <HomeProjectComponent {...props.projectComponentProp} />
      </ContainerFluidAtom>
    </SectionFluidAtom>
  );
};
