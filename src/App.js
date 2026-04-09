import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    const newContact = { ...contact, id: Date.now() };
    setContacts((prev) => [...prev, newContact]);
  };

  const updateContact = (updatedContact) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>📇 Contact Manager</h1>

      <input
        type="text"
        placeholder="🔍 Search by name or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search"
      />
      
      <div className="form-wrapper">
        <ContactForm 
          addContact={addContact}
          updateContact={updateContact}
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />
      </div>

      <ContactList 
        contacts={filteredContacts}
        onDelete={deleteContact}
        onEdit={setEditingContact}
      />
    </div>
  );
}

export default App;