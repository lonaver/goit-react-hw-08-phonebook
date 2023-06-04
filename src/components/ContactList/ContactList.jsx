import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTasks, getFilter } from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';

import { fetchContacts } from '../../ContactsAPI';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);
  const { filter } = useSelector(getFilter);

  const [visibleContacts, setVisibleContacts] = useState([]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const normoliseFilter = filter.toString().toLowerCase();
    setVisibleContacts(
      items.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normoliseFilter) ||
          number.toLowerCase().includes(normoliseFilter)
      )
    );
  }, [filter, items]);

  return (
    <div className={styles.listAbonent}>
      {isLoading && <span>Loading...</span>}
      {error ? (
        <span>Something wrong... </span>
      ) : (
        visibleContacts.map(({ name, number: phone, id }, index) => (
          <ContactItem name={name} phone={phone} id={id} key={index} />
        ))
      )}
    </div>
  );
};
export default ContactList;
