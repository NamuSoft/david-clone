type Props = {
  title: string;
};

export const AboutMeContentModule = (props: Props) => {
  return <div className='flex h-screen flex-col'>{props.title}</div>;
};
