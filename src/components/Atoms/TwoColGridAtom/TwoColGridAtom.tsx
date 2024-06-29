import { Col, Row } from "antd";
import { ReactNode } from "react";
import { divideArray } from "~/utils/common";

type Props<T> = {
  data: T[];
  className?: string;
  Atom: React.ComponentType<T>;
  childClassName?: [string, string?] | undefined;
};

export const TwoColGridAtom = <T,>(props: Props<T>) => {
  const [data1, data2] = divideArray(props.data);

  return (
    <Row
      justify='center'
      gutter={[20, 20]}
      className={` box-border w-full  ${props.className}`}
    >
      <Col xs={24} sm={12} className={props.childClassName?.[0]}>
        {data1.map((item, index) => (
          <props.Atom key={index} {...item} />
        ))}
      </Col>
      <Col
        xs={24}
        sm={12}
        className={props.childClassName?.[1] ?? props.childClassName?.[0]}
      >
        {data2.map((item, index) => (
          <props.Atom key={index} {...item} />
        ))}
      </Col>
    </Row>
  );
};
