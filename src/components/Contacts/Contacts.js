import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ name, number, id, asyncDeleteContact }) => (
  <div className={styles.container}>
    <p className={styles.text}>
      {name}: {number}
    </p>
    <button
      type="button"
      onClick={() => asyncDeleteContact(id)}
      className={styles.btn}
    >
      X
    </button>
  </div>
);

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  asyncDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
