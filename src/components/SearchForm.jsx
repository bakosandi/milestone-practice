import { useState } from "react";

const SearchForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch({ name, type });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={handleNameChange}
        value={name}
      />
      <input
        type="text"
        placeholder="Type"
        onChange={handleTypeChange}
        value={type}
      />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
