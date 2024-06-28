import { type EventItems } from "~/components/Components/EventItems/EventItems";

export const AboutEventData: React.ComponentProps<typeof EventItems>[] = [
  {
    title: "Awards",
    events: [
      {
        icon: "/images/small-star.png",
        title: "awwards AWARD",
        date: "June 2023",
      },
      {
        icon: "/images/small-sstar.png",
        title: "Campaign AWARD",
        date: "June 2013",
      },
      {
        icon: "/images/small-ssstar.png",
        title: "Animation AWARD",
        date: "Aug 2010",
      },
      {
        icon: "/images/small-sssstar.png",
        title: "Peach Of the day",
        date: "Aug 2000",
      },
    ],
  },

  {
    title: "Events",
    events: [
      {
        // icon: "/images/small-star.png",
        title: "CES 2021",
        date: "February 2023",
      },
      {
        // icon: "/images/small-sstar.png",
        title: "Campaign ARTS",
        date: "June 2013",
      },
      {
        // icon: "/images/small-ssstar.png",
        title: "Tokiko Art",
        date: "Aug 2010",
      },
      {
        // icon: "/images/small-sssstar.png",
        title: "Best Design Award",
        date: "Aug 2000",
      },
    ],
  },
];
