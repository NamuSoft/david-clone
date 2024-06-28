import React from "react";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { SlideUpAnimationAtom } from "~/components/Atoms/SlideUpAnimationAtom/SlideUpAnimationAtom";
import { TeamItemAtom } from "~/components/Atoms/TeamItemAtom/TeamItemAtom";

type Props = {
  // Add props here
  data: React.ComponentProps<typeof TeamItemAtom>[];
};

export const HomeTeam = (props: Props) => {
  return (
    <ContainerAtom>
      <div className='team-wrap'>
        <div className='flex flex-row'>
          <div className='grid grid-cols-12 gap-4'>
            {props.data.map((item, index) => (
              <div
                key={index}
                className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'
              >
                <SlideUpAnimationAtom>
                  <TeamItemAtom {...item} />
                </SlideUpAnimationAtom>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContainerAtom>
  );
};
