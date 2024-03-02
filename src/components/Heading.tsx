import React from "react";

type isHeadingProps = {
  children: string;
};

const Heading = (props: isHeadingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;
