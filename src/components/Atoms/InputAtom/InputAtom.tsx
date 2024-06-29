import { ArrowRightOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./custom.css";
type Props = {
  // Add props here
  className?: string;
};

export const InputAtom = (props: Props) => {
  return (
    <form>
      <div className='relative'>
        <Input
          type='email'
          placeholder='Your e-mail address'
          id='semail'
          required
          className={`custom-input ${props.className}`}
        />
        <button
          type='submit'
          className='absolute right-0 top-0 h-[60px] w-[60px] cursor-pointer border-0 bg-none
 text-[#ff4a3b]'
        >
          <ArrowRightOutlined />
        </button>
      </div>
    </form>
  );
};
