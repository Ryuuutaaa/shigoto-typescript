import React from "react";

type isOscarProps = {
  children: React.ReactNode;
};

const Oscar = (props: isOscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
