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

    // if (
    //   contacts.find(
    //     contact => contact.name.toLowerCase() === name.toLowerCase(),
    //   )
    // ) {
    //   toast(` ${name} is already in use.`);
    // } else if (contacts.find(contact => contact.number === number)) {
    //   toast(` ${number} is already in use.`);
    // } else if (name.trim() === '' || number.trim() === '') {
    //   toast.info(" Enter the contact's name and  phone number!");
    // } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
    //   toast.error(' Enter the correct  phone number(check format)!');
    // } else {
    //   setContacts(prevContacts =>
    //     [contact, ...prevContacts].sort((a, b) => {
    //       if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    //       if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    //       return 0;
    //     }),
    //   );
    // }
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
