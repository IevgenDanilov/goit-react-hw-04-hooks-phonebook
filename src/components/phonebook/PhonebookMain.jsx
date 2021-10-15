import React, { useState } from "react";
import { generate } from "shortid";
import PropTypes from "prop-types";
import "./PhonebookMain.css";

const Phonebook = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generate();
    const { name, number } = state;
    const newContact = { id, name, number };
    onSubmit(newContact);
    reset();
  };

  const reset = () => {
    setState({ name: "", number: "" });
  };

  const { name, number } = state;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            className="input"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button type="submit" className="btn">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
