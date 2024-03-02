import React from "react";

type GeetProps = {
  name: string;
  umur: number;
  ttl: string;
  hobi: string;
};

const Great = (props: GeetProps) => {
  return (
    <div>
      Hello my name is {props.name}, nice to meet you, aku berumur {props.umur},
      aku lahir di {props.ttl} dan aku suka {props.hobi}
    </div>
  );
};

export default Great;
