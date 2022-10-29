import { useState } from "react";

const Numbers = ({ numbers }) => {
	return numbers.map((number) => <p key={number.name}>{number.name}</p>);
};

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const addPerson = (event) => {
		event.preventDefault();
		const personObj = { name: newName };
		setPersons(persons.concat(personObj));
	};

	const changeName = (event) => setNewName(event.target.value);

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name:{" "}
					<input
						type="text"
						value={newName}
						onChange={changeName}
					/>
				</div>
				<div>
					<button
						type="submit"
						onClick={addPerson}
					>
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<Numbers numbers={persons} />
		</div>
	);
};

export default App;
