import { Footer } from "~/components/Components/Footer/Footer";
import "./custom.css";
import { LowerFooter } from "~/components/Components/LowerFooter/LowerFooter";
type Props = {
  // Add props here
  upperFooterProps: React.ComponentProps<typeof Footer>;
  lowerFooterProps: React.ComponentProps<typeof LowerFooter>;
};

export const FooterModule = (props: Props) => {
  return (
    <div className='footer-section'>
      <div className='upper-footer'>
        <Footer {...props.upperFooterProps} />
      </div>

      <div className='lower-footer'>
        <LowerFooter {...props.lowerFooterProps} />
      </div>
    </div>
  );
};
