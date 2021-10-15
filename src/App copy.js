import "./App.css";
import React, { Component } from "react";
import Phonebook from "./components/phonebook/PhonebookMain.jsx";
import ContactList from "./components/contactList/ContactList.jsx";
import Filter from "./components/filter/Filter.jsx";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmitHandler = (data) => {
    const { contacts } = this.state;
    const availability = contacts.some((contact) => contact.name === data.name);

    if (availability !== true) {
      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, data] };
      });
    } else {
      alert("Already in book!");
      return;
    }
  };

  handleFilter = () => {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  handleDelete = (id) => {
    this.setState(({ contacts }) => {
      const copyContactsList = [...contacts];
      const newContactsList = copyContactsList.filter(
        (contact) => contact.id !== id
      );
      return {
        contacts: newContactsList,
      };
    });
  };

  componentDidMount() {
    const getContacts = localStorage.getItem("contacts");
    const arrContacts = JSON.parse(getContacts);
    arrContacts && this.setState({ contacts: arrContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className="conteiner">
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <ContactList
          listContact={this.handleFilter()}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
