import { LinkAtom } from "../../Atoms/LinkAtom/LinkAtom";
import { ResponsiveImgAtom } from "../../Atoms/ResponsiveImgAtom/ResponsiveImgAtom";

type Props = {
  home: string;
  theme: boolean;

  // Add props here
};

export const NavIcon = (props: Props) => {
  return (
    <div className='logo'>
      <LinkAtom href={props.home}>
        <ResponsiveImgAtom
          src={`/svgs/${props.theme ? "logo" : "logoBlack"}.svg`}
          width={195}
          height={62}
          alt=''
        />
      </LinkAtom>
    </div>
  );
};
