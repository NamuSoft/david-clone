import { type ProjectItem } from "~/data/projects/ProjectsData";

type Props = {
  data: ProjectItem | undefined;
};

export const Project_singleContentModule = (props: Props) => {
  return props.data && <div>{props.data.img}</div>;
};
