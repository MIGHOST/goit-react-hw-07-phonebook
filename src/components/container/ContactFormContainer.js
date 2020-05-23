import ContactForm from '../ContactForm/ContactForm';
import { connect } from 'react-redux';
import { asyncAddOneContact } from '../../store/operation/contactOperation';
const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  asyncAddOneContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
