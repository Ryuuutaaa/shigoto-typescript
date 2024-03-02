import React from "react";

type getListPerson = {
  names: {
    first: string;
    last: string;
  }[];
};

const ListPerson = (props: getListPerson) => {
  return (
    <div>
      <h1>This list person</h1>
      {props.names.map((name) => {
        return (
          <p key={name.first}>
            {name.first}
            {name.last}
          </p>
        );
      })}
    </div>
  );
};

export default ListPerson;
