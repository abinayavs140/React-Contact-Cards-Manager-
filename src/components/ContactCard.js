import React from "react";

const ContactCard = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="card">
      <img
        src={contact.avatar || "https://i.pravatar.cc/100?img=" + contact.id}
        alt={contact.name}
        className="avatar"
        onError={(e) => {
          e.target.src = "https://i.pravatar.cc/100";
        }}
      />
      <div className="card-content">
        <div className="card-header">
          <h3>{contact.name}</h3>
          <div className="card-actions">
            <button 
              onClick={() => onEdit(contact)} 
              className="icon-btn edit"
              title="Edit contact"
            >
              ✏️
            </button>
            <button 
              onClick={() => onDelete(contact.id)} 
              className="icon-btn delete"
              title="Delete contact"
            >
              🗑️
            </button>
          </div>
        </div>
        <p><strong>🏢 Company:</strong> {contact.company}</p>
        <p><strong>✉️ Email:</strong> {contact.email || "Not provided"}</p>
        <p><strong>📞 Phone:</strong> {contact.phone || "Not provided"}</p>
        <p><strong>📝 Bio:</strong> {contact.bio || "No bio available"}</p>
      </div>
    </div>
  );
};

export default ContactCard;