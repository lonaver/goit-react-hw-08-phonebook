import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Blocks } from 'react-loader-spinner';

import { deleteContact } from '../../ContactsAPI';

import styles from './ContactItem.module.css';
import stylesApp from '../../components/App.module.css';

const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    state => state.contacts.contacts[id]?.isLoading
  );

  const handleDelete = idContact => {
    dispatch(deleteContact(idContact));
  };

  return (
    <li className={styles.item_contact}>
      <div className={styles.text_contact}>
        <span>{name} </span>
        <span className={styles.accent_text}>{phone}</span>
      </div>
      <button
        type="button"
        className={stylesApp.btn}
        disabled={isLoading ? true : false}
        onClick={() => handleDelete(id)}
      >
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
          'delete'
        )}
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
