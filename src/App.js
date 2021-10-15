import "./App.css";
import React, { useState, useEffect } from "react";
import Phonebook from "./components/phonebook/PhonebookMain.jsx";
import ContactList from "./components/contactList/ContactList.jsx";
import Filter from "./components/filter/Filter.jsx";

const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmitHandler = (data) => {
    const { contacts } = state;
    const availability = contacts.some((contact) => contact.name === data.name);

    if (availability !== true) {
      setState((prevState) => {
        return { ...prevState, contacts: [...prevState.contacts, data] };
      });
    } else {
      alert("Already in book!");
      return;
    }
  };

  const handleFilter = () => {
    const { filter, contacts } = state;
    const filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const handleDelete = (id) => {
    setState((prevState) => {
      const copyContactsList = [...prevState.contacts];
      const newContactsList = copyContactsList.filter(
        (contact) => contact.id !== id
      );
      return { ...prevState, contacts: newContactsList };
    });
  };

  useEffect(() => {
    const getContacts = window.localStorage.getItem("contacts");
    const arrContacts = JSON.parse(getContacts);
    arrContacts &&
      setState((prevState) => ({
        ...prevState,
        contacts: arrContacts,
      }));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  return (
    <div className="conteiner">
      <h1>Phonebook</h1>
      <Phonebook onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={state.filter} />
      <ContactList listContact={handleFilter()} onDelete={handleDelete} />
    </div>
  );
};

export default App;
