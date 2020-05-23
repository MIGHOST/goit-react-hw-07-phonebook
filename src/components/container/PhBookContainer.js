import { connect } from 'react-redux';
import Phonebook from '../Phonebook/Phonebook';
import { getContacts } from '../../store/selectors/contactSelectors';
import { asyncGetContacts } from '../../store/operation/contactOperation';
import getError from '../../store/selectors/errorSelector';

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
    error: getError(state),
  };
};

const mapDispatchToProps = {
  getAllContacts: asyncGetContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
