import React from "react";

import { Name } from "../lib/personTypes";

type getListPerson = {
  names: Name[];
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
