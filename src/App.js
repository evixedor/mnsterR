import { useState, useEffect } from "react"; // hooks for functional component

import SearchBox from "./components/search-box/search-box.component";
import ProfileList from "./components/profile-list/profile-list.component";
import "./App.css";

// FUNCTIONAL COMPONENT
const App = () => {
	const [searchField, setSearchField] = useState(""); // useState gives an array of two values [value_to_be_stored, value_to_be_set or a function]; '' is passed into useState as the initial value of the local state. searchField is whatever type of data we pass into it.. in this case a string
	const [monsters, setMonsters] = useState([]); // this syntax is also an initialization of a new state
	const [filteredMonsters, setFilteredMonsters] = useState(monsters); 
	
	console.log("render1"); // an indicator for when the App is rendered
	
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users") // every fetch call is a sideEffect
			.then((response) => response.json())
			.then(
				(users) => setMonsters(users)
			);
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]); // the sideEFFECT is activated whenever these dependencies undergo a change

	const handleChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>

			<SearchBox
				className="monsters-search-box"
				changeHandler={handleChange}
				placeholder="search monsters"
			/>
			<ProfileList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
