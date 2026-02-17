type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      PersonList
      {props.names.map((name, index) => (
        <div key={index}>
          {name.first} {name.last}
        </div>
      ))}
    </div>
  );
}

export default PersonList;
