import React from "react";
import PropTypes from "prop-types";
import "./ContactList.css";

const ContactList = ({ listContact, onDelete }) => {
  return (
    <ul className="contacts">
      {listContact.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDelete(id)} type="button" className="btn">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  listContact: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
