import React, { useState } from "react";
import Name from "./components/Name";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
	console.log("app");
	const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567", id: 1 },
    { name: "Ada Lovelace", number: "040-125415647", id: 2 },
    { name: "Brubru Ng", number: "055-000651351", id: 3 },
    { name: "Pocky Ng", number: "550-4564127", id: 4 },
    { name: "Fish Ng", number: "652-124518", id: 5 },

  ]);

  const [filter, setFilter] = useState("");
  
  const filteredNames = persons.filter(
    (person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );


	return (
		<div>
			<h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new</h2>
			<PersonForm persons={persons} setPersons={setPersons} />
			<h2>Numbers</h2>
			<Persons filteredNames={filteredNames} />
		</div>
	);
};

export default App;