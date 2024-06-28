import { EventItemAtom } from "~/components/Atoms/EventItemAtom/EventItemAtom";
import "./custom.css";
type Props = {
  // Add props here
  title: string;
  events: React.ComponentProps<typeof EventItemAtom>[];
};

export const EventItems = (props: Props) => {
  return (
    <div className='event-items'>
      <h3>{props.title}</h3>
      {props.events.map((item, index) => (
        <EventItemAtom {...item} key={index} />
      ))}
    </div>
  );
};
