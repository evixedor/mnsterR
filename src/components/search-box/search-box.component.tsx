import { ChangeEvent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, onChangeHandler, className }: SearchBoxProps) => (
	<input
		className={`search-box ${className}`}
		type="search"
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
