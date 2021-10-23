import React, { useState } from "react";
import { generate } from "shortid";
import PropTypes from "prop-types";
import "./PhonebookMain.css";
import styles from "./PhonebookMain.module.css";

const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleChangeNumber = (e) => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generate();
    const newContact = { id, name, number };
    onSubmit(newContact);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            className={styles.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChangeNumber}
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button type="submit" className={styles.btn}>
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
