import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, changeHandler, className }) => (
	<input
		className={`search-box ${className}`}
		type="search"
		placeholder={placeholder}
		onChange={changeHandler}
	/>
);

export default SearchBox;
