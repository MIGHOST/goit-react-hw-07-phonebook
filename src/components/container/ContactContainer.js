import Contacts from '../Contacts/Contacts';
import { connect } from 'react-redux';
import { asyncDeleteContact } from '../../store/operation/contactOperation';

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  asyncDeleteContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
