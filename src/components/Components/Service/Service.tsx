import React from "react";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
import { ServiceAtom } from "~/components/Atoms/ServiceAtom/ServiceAtom";

type Props = {
  // Add props here
  data: React.ComponentProps<typeof ServiceAtom>[];
};

export const Service = (props: Props) => {
  return (
    <div className='service-section-s2'>
      <RowAtom className=' justify-center'>
        <div className=' lg:w-full'>
          <div className='service-wrap'>
            <RowAtom>
              {props.data.map((item, index) => (
                <div
                  key={index}
                  className='ol w-full pl-4 pr-4 md:w-1/2 lg:w-1/2'
                >
                  <ServiceAtom {...item} />
                </div>
              ))}
            </RowAtom>
          </div>
        </div>
      </RowAtom>
    </div>
  );
};
