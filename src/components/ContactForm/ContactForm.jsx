import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Blocks } from 'react-loader-spinner';
import { toast } from 'react-hot-toast';

import { getTasks } from 'redux/selectors';
import { addContact } from '../../ContactsAPI';

import styles from './ContactForm.module.css';
import stylesApp from '../../components/App.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(getTasks);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.number.value;
    const normoliseName = name.toLowerCase();
    const contactFind = items.find(
      contact => contact.name.toLowerCase() === normoliseName
    );

    if (contactFind) {
      toast.error(
        `${contactFind.name} is alredy contact with phone ${contactFind.number}`
      );
      return;
    }
    const contactFindPhone = items.find(contact => contact.phone === phone);
    if (contactFindPhone) {
      toast.error(
        `${contactFindPhone.name} is alredy contact with phone ${contactFindPhone.number}`
      );
      return;
    }
    dispatch(addContact({ name, number: phone }));
    e.currentTarget.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={stylesApp.label_input}>
        Name
        <input
          className={stylesApp.field}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number" className={stylesApp.label_input}>
        Number
        <input
          className={stylesApp.field}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={stylesApp.btn}>
        {isLoading ? (
          <Blocks
            visible={true}
            height="20"
            width="20"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        ) : (
          'Add'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
