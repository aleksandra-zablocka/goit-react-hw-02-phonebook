import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactEl from 'components/ContactEl/ContactEl';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <div className={css.contactList}>
        <h2>Contacts</h2>
        <p>Name, number</p>
        {/* <ul>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button onClick={() => this.props.deleteContact(contact.id)}>
                Delete contact
              </button>
            </li>
          ))}
        </ul> */}

        <ul>
          {this.props.contacts.map(contact => (
            <ContactEl
              key={contact.id}
              contact={contact}
              deleteContact={this.props.deleteContact}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
