import "./custom.css";
type Props = {
  // Add props here
  name: string;
  role: string;
  content: string;
};

export const AboutContent = (props: Props) => {
  return (
    <div className='about-content  block'>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <p>{props.content}</p>
    </div>
  );
};
