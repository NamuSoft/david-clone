import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { NewsLetter } from "~/components/Components/NewsLetter/NewsLetter";

type Props = {
  newsLetterProps: React.ComponentProps<typeof NewsLetter>;
};

export const PortfolioNewsletterModule = (props: Props) => {
  return (
    <div className='bg-[#fdf9f6] py-[80px]'>
      <ContainerAtom>
        <NewsLetter {...props.newsLetterProps} />
      </ContainerAtom>
    </div>
  );
};
