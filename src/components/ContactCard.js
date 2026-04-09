import React from "react";

function ContactCard({ contact }) {
  return (
    <div className="card">
      <img
        src={contact.avatar || "https://via.placeholder.com/150"}
        alt="avatar"
      />

      <h3>{contact.name}</h3>
      <p><strong>{contact.company}</strong></p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <p>{contact.bio}</p>
    </div>
  );
}

export default ContactCard;