import Icon from "@ant-design/icons/lib/components/Icon";
import { Row } from "antd";
import React from "react";
import { OfficeItemAtom } from "~/components/Atoms/OfficeItemAtom/OfficeItemAtom";
import { TwoColGridAtom } from "~/components/Atoms/TwoColGridAtom/TwoColGridAtom";

type Props = {
  // Add props here
  title: string;
  data: React.ComponentProps<typeof OfficeItemAtom>[];
};

export const OfficeInfo = (props: Props) => {
  return (
    <div>
      <h3 className='mb-[30px] text-center font-italiana  text-[30px] text-[#1f1f1f] md:text-left'>
        {props.title}
      </h3>
      <TwoColGridAtom
        childClassName={["pr-[50px]", ""]}
        data={props.data}
        Atom={OfficeItemAtom}
      />
    </div>
  );
};
