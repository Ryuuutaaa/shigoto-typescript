import React from "react";

type GeetProps = {
  name: string;
  isMassage: number;
  isLogined: boolean;
};

const Great = (props: GeetProps) => {
  return (
    <div>
      {props.isLogined ? (
        <h1>
          Hello {props.name}, you have {props.isMassage} massage
        </h1>
      ) : (
        <h1>Hii guess</h1>
      )}
    </div>
  );
};

export default Great;
