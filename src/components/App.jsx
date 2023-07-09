import React, { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = index => {
    this.setState(prevState => {
      const updatedContacts = [...prevState.contacts];
      updatedContacts.splice(index, 1);
      return { contacts: updatedContacts };
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <Form addContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
