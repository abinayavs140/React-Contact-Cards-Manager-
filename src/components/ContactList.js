import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  return (
    <div className="list">
      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}
    </div>
  );
}

export default ContactList;