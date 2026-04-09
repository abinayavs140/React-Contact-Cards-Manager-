import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <div className="list">
      {contacts.length === 0 ? (
        <p className="empty">📭 No contacts yet. Add one above 👆</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard 
            key={contact.id} 
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;