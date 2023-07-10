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

  deleteContact = id => {
    // this.setState(prevState => {
    //   const updatedContacts = [...prevState.contacts];
    //   updatedContacts.splice(index, 1);
    //   return { contacts: updatedContacts };
    // });
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !==id),
    }))
  };

  render() {
    // console.log(this.state.contacts);
    return (
      <div className="book">
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
