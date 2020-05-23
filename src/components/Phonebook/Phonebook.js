import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../container/ContactFormContainer';
import ContactList from '../container/ContactListContainer';
import ContactFilter from '../container/ContactFilterContainer';
import Error from '../Error/Error';
import styles from './Phonebook.module.css';
import slideTransition from '../../assert/transition/slide.module.css';

class Phonebook extends Component {
  componentDidMount() {
    this.props.getAllContacts();
  }
  render() {
    const { contacts } = this.props;
    const { error } = this.props;

    return (
      <>
        {error ? (
          <Error />
        ) : (
          <>
            <h1 className={styles.logo}>Phonebook</h1>
            <ContactForm />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              closeOnClick
            />
            <CSSTransition
              in={contacts.length >= 1}
              timeout={250}
              unmountOnExit
              classNames={slideTransition}
            >
              <div>
                <h2 className={styles.text}>Contacts</h2>
                <ContactFilter />
                <ContactList />
              </div>
            </CSSTransition>
          </>
        )}
      </>
    );
  }
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
  getAllContacts: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};
export default Phonebook;
