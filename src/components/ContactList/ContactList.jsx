import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, getFilter } from 'redux/selectors';

//import { getContactsThunk, deleteContactsThunk } from '../../thunk/thunk';
import { fetchContacts, deleteContact } from '../../ContactsAPI';
import styles from './ContactList.module.css';
import stylesApp from '../../components/App.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);
  const { filter } = useSelector(getFilter);

  const [visibleContacts, setVisibleContacts] = useState([]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = idContact => {
    dispatch(deleteContact(idContact));
  };

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
      {visibleContacts.map(({ name, number: phone, id }, index) => (
        <li className={styles.item_contact} key={index}>
          <div className={styles.text_contact}>
            <span>{name} </span>
            <span className={styles.accent_text}>{phone}</span>
          </div>
          <button
            type="button"
            className={stylesApp.btn}
            onClick={() => handleDelete(id)}
          >
            delete
          </button>
        </li>
      ))}
      {error && <span>Something wrong... </span>}
    </div>
  );
};
export default ContactList;
