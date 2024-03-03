import { PersonName } from "../lib/personTypes";

const Person = (props: PersonName) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
