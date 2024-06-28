import Image from "next/image";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import "./custom.css";
import { HomeTeam } from "~/components/Components/HomeTeam/HomeTeam";

type Props = {
  //
  homeTeamProps: React.ComponentProps<typeof HomeTeam>;
};

export const HomeTeamModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='team-section  pt-0 '>
      <HomeTeam {...props.homeTeamProps} />
      <div className='flower-shape hidden lg:block'>
        <Image
          src={"/images/home/flower.png"}
          width={238}
          height={254}
          alt=''
        />
      </div>
    </SectionPaddingAtom>
  );
};
