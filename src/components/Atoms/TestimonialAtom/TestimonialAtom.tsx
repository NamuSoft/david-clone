import "./custom.css"
type Props = {
  // Add props here
  message: string,
  author: string,
  company: string,
    };

export const TestimonialAtom = (props: Props) => {
  return (
    <div className='testimonnial-item inline-block w-full text-center align-middle'>
      <p className=''>{props.message}</p>
      <span className='space-mono-regular capitalize'>
        {props.author}
        &nbsp; - &nbsp; <small> {props.company}</small>
      </span>
    </div>
  );
};