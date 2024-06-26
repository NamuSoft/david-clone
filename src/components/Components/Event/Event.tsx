import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import "./custom.css";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
import { EventItems } from "../EventItems/EventItems";
import React from "react";
type Props = {
  // Add props here
  eventsData: React.ComponentProps<typeof EventItems>[];
};

export const Event = (props: Props) => {
  return (
    <div className='event-section mt-0'>
      <ContainerAtom>
        <RowAtom>
          {props.eventsData.map((item, index) => (
            <div key={index} className='w-full  pl-4  pr-4 md:w-1/2 lg:w-1/2'>
              <EventItems {...item} />
            </div>
          ))}
        </RowAtom>
      </ContainerAtom>
    </div>
  );
};
