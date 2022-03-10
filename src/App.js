import React, { useState } from "react";
import Name from "./components/Name";

const App = () => {
	console.log("app");
	const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567", id: 1 },
    { name: "Ada Lovelace", number: "040-125415647", id: 2 },
    { name: "Brubru Ng", number: "055-000651351", id: 3 },
    { name: "Pocky Ng", number: "550-4564127", id: 4 },
    { name: "Fish Ng", number: "652-124518", id: 5 },

  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

	const addName = () => {
		const nameObject = {
      name: newName,
      number: newNumber,
			id: persons.length + 1,
		};

		setPersons(persons.concat(nameObject));
    setNewName("")
    setNewNumber("");
	};

	const updateName = (event) => {
		setNewName(event.target.value);
  };

  const updateNumber = (event) => {
		setNewNumber(event.target.value);
  };

  const updateFilter = (event) => {
		setFilter(event.target.value);
  };
  
  const filteredNames = persons.filter(
    (person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );

  const checkExists = (event) => {
    event.preventDefault();

    const currentList = persons.map((person) => person.name);

    currentList.includes(newName)
      ? alert(`${newName} is already added to the phontbook`)
      : addName();
  };

	return (
		<div>
			<h2>Phonebook</h2>
      <div>
          filter shown with: <input value={filter} onChange={updateFilter} />
        </div>
      <h2>add a new</h2>
			<form onSubmit={checkExists}>
				<div>
          name: <input value={newName} onChange={updateName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={updateNumber} />
        </div>
				<button type="submit">add</button>
			</form>
			<h2>Numbers</h2>
			<ul>
				{filteredNames.map(person => (
					<Name key={person.id} person={person} />
          
				))}
			</ul>
		</div>
	);
};

export default App;