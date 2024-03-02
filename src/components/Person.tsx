type PersonName = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonName) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
