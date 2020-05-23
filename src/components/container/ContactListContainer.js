import ContactList from '../ContactList/ContactList';
import { connect } from 'react-redux';
import {getFilteredContacts} from '../../store/selectors/contactSelectors';
import getLoader from '../../store/selectors/loaderSelector';

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
  loader: getLoader(state),
})

export default connect(mapStateToProps)(ContactList);
