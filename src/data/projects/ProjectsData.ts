export type ProjectItem = {
  name: string;
  img: string;
  client: string;
  designer: string;
  category: string;
  share: [string, string, string];
  info: string;
};

type ProjectCollection = Record<string, ProjectItem>;

export const ProjectsData: ProjectCollection = {
  ui_design: {
    name: "ui_design",
    img: "/images/projects/img-4",
    client: "Robert Fox",
    designer: "Cameron Williamson",
    category: "Drawing",
    share: ["fb", "tw", "ln"],
    info: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa.",
  },
  design: {
    name: "design",
    img: "/images/projects/img-3",
    client: "Robert Fox",
    designer: "Cameron Williamson",
    category: "Drawing",
    share: ["fb", "tw", "ln"],
    info: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa.",
  },
  business: {
    name: "business",
    img: "/images/projects/img-1",
    client: "Robert Fox",
    designer: "Cameron Williamson",
    category: "Drawing",
    share: ["fb", "tw", "ln"],
    info: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa.",
  },
  // other projects
};
