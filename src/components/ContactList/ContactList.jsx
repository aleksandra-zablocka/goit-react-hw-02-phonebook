import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactEl from 'components/ContactEl/ContactEl';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <div className={css.contactList}>
        <h2>Contacts</h2>
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

export default ContactList;
