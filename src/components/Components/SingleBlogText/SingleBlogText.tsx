type Props = {
  // Add props here
  qoute: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  title: string;
  subtitle: string;
};

export const SingleBlogText = (props: Props) => {
  return (
    <div className='blog-text text-center md:text-left'>
      <div className='mb-8 mt-12 text-center'>
        <span className='space-mono-regular text-[16px] font-normal leading-[29px] '>
          {props.subtitle}
        </span>
        <h2 className='font-[Italiana] text-[30px] font-normal text-[#1f1f1f] md:text-[45px] lg:text-[60px]'>
          {props.title}
        </h2>
      </div>
      <p className='mb-4 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f]'>
        {props.p1}
      </p>
      <p className='mb-4 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f]'>
        {props.p2}
      </p>
      <blockquote className='pt-30 pb-30 md:pt-70 md:pb-70 pt-100 pb-100 mb-0 text-center font-[Italiana] text-[30px] font-normal leading-normal md:text-[45px] lg:text-[60px] '>
        {props.qoute}
      </blockquote>
      <p className='mb-4 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f]'>
        {props.p3}
      </p>
      <p className='mb-4 mt-0 box-border text-[16px] leading-[1.8em] text-[#1f1f1f]'>
        {props.p4}
      </p>
    </div>
  );
};
