import React from "react";
import styles from "./custom.module.css"; // Ensure correct relative path
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { FeatureItemAtom } from "~/components/Atoms/FeatureItemAtom/FeatureItemAtom";

type Props = {
  data: React.ComponentProps<typeof FeatureItemAtom>[];
};

export const HomeFeatures = (props: Props) => {
  return (
    <ContainerAtom >
      <div className={` flex flex-col justify-center`}>
        {props.data.map((item, index) => (
          <FeatureItemAtom key={index} {...item} />
        ))}
      </div>
    </ContainerAtom>
  );
};
