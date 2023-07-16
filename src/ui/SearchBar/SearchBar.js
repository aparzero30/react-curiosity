import { useRef } from "react";
import classes from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = (props) => {
  const searchRef = useRef();

  const [searchInput, setSearchInput] = useState("");

  const handleClearInput = () => {
    setSearchInput("");
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    props.onChange(event);
  };

  return (
    <div className={classes.searchWrapper}>
      <input
        onChange={handleInputChange}
        placeholder={props.placeHolder}
        ref={searchRef}
        value={searchInput}
        type={props.type}
      />
      <i className="fa-solid fa-magnifying-glass" />
      <i className="fa-solid fa-x" onClick={handleClearInput} />
    </div>
  );
};
export default SearchBar;
