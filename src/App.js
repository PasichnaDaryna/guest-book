import { useState, useEffect } from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import shortid from 'shortid';
import Container from './components/Container/Container';
import Form from './components/Form/Form';

import List from './components/List/List';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = (name, message) => {
    const contact = {
      id: shortid.generate(),
      name,
      message,
    };


    setContacts(prevContacts =>
      [contact, ...prevContacts].sort((a, b) => {

        return 0;
      }),
    );

  };


  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Comments</h2>


      <List
        contacts={getVisibleContacts()}

      />

      <ToastContainer autoClose={3700} />
    </Container>
  );
}

export default App;
