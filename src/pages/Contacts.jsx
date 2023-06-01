import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from 'redux/selectors';
//import { getContactsThunk } from '../thunk/thunk';
import { fetchContacts } from '../ContactsAPI';

import styles from '../components/App.module.css';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

export default function Contacts() {
  const { items } = useSelector(getTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contacts}>
      <h1>Phone book</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      {items.length > 0 && <ContactList></ContactList>}
    </div>
  );
}
