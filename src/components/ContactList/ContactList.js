import React from 'react';
import Proptypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, searchQuery, deleteContact }) => {
  const filterCallback = contact => {
    const searchQueryToLowercase = searchQuery.toLowerCase();
    return contact.name.toLowerCase().includes(searchQueryToLowercase);
  };

  return (
    <ul className={s.list}>
      {contacts.filter(filterCallback).map(contact => (
        <li className={s.item} key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            className={s.button}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string,
      name: Proptypes.string,
      number: Proptypes.string,
    })
  ).isRequired,
  searchQuery: Proptypes.string.isRequired,
  deleteContact: Proptypes.func.isRequired,
};

export default ContactList;
