import Title from './common/Title';
import SubTitle from './common/SubTitle';
import ContactForm from './ContactForm';
import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import Filter from './Filter';
import useIsFirstRender from '../hooks/useIsFirstRender';

export const App = () => {
  const isFirstRender = useIsFirstRender();
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isFirstRender) {
      setContacts(JSON.parse(localStorage.getItem('contacts')) ?? []);
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts.length]);

  const addContact = contact => {
    const duplicate = contacts.find(el => el.name === contact.name);
    if (duplicate) {
      alert(`${duplicate.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div className="app">
      <Title title="Phonebook" />
      <ContactForm addContact={addContact} />

      <SubTitle title="Contacts" />
      <Filter setSearchQuery={setSearchQuery} value={searchQuery} />
      <ContactList
        contacts={contacts}
        searchQuery={searchQuery}
        deleteContact={deleteContact}
      />
    </div>
  );
};
