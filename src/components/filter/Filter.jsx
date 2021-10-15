import React from "react";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ handleChange, filter }) => {
  return (
    <div>
      <label className="label">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className="input"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
