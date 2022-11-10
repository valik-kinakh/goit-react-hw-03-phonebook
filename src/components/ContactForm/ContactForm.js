import React, { useRef } from 'react';
import Proptypes from 'prop-types';
import Label from '../common/Label';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const name = useRef();
  const number = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    addContact({
      name: name.current.value,
      number: number.current.value,
      id: uuidv4(),
    });
  };

  return (
    <section className={s.form}>
      <form onSubmit={handleSubmit}>
        <div className={s.container}>
          <Label htmlFor="name" text="Name" />
          <input id="name" ref={name} required />
        </div>
        <div className={s.container}>
          <Label htmlFor="number" text="Number" />
          <input
            ref={number}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button type="submit">Add contact</button>
      </form>
    </section>
  );
};

ContactForm.propTypes = {
  addContact: Proptypes.func.isRequired,
};

export default ContactForm;
