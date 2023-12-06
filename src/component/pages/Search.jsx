import Names from "../../assets/person.json";

function Search(props) {
  return (
    <div>
      <h1>Search from names:</h1>
      <div>
        {Names.filter((value) => {
          if (value.name == "") {
            return value;
          } else if (
            value.name
              .toLocaleLowerCase()
              .includes(props.search.toLocaleLowerCase())
          ) {
            return value;
          }
        }).map((value) => (
          <p>{value.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Search;
