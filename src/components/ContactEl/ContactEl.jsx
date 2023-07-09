import React from 'react';

const ContactEl = ({contact, deleteContact}) => {
    const {id, name, number} = contact;

    return (
        <li>
            {name}: {number} {' '}
            <button onClick={() => deleteContact(id)}>Delete contact</button>
        </li>
    )
}

export default ContactEl;
