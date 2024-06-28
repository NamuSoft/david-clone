import "./custom.css";
import { EventItems } from "../EventItems/EventItems";
import React from "react";
type Props = {
  // Add props here
  eventsData: React.ComponentProps<typeof EventItems>[];
  className?: string;
};

export const Event = (props: Props) => {
  return props.eventsData.map((item, index) => (
    <div key={index} className={props.className}>
      <EventItems {...item} />
    </div>
  ));
};
