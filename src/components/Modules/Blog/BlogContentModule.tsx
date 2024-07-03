type Props = {
  title: string;
};

export const BlogContentModule = (props: Props) => {
  return <div>{props.title}</div>;
};
