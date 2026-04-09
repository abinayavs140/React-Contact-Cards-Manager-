import React, { useState, useEffect } from "react";

function ContactForm({ addContact, updateContact, editingContact, setEditingContact }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    bio: "",
    avatar: ""
  });

  useEffect(() => {
    if (editingContact) {
      setFormData(editingContact);
    } else {
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        bio: "",
        avatar: ""
      });
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.company) return;

    if (editingContact) {
      updateContact(formData);
    } else {
      addContact(formData);
    }

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      bio: "",
      avatar: ""
    });
  };

  const handleCancel = () => {
    setEditingContact(null);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      bio: "",
      avatar: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>{editingContact ? "✏️ Edit Contact" : "➕ Add New Contact"}</h3>
      
      <input
        name="name"
        placeholder="📛 Full Name *"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="company"
        placeholder="🏢 Company *"
        value={formData.company}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="📞 Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="✉️ Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="avatar"
        placeholder="🖼️ Avatar URL"
        value={formData.avatar}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="📝 Bio"
        value={formData.bio}
        onChange={handleChange}
        rows="3"
      ></textarea>

      <div className="form-buttons">
        <button type="submit" className="btn-submit">
          {editingContact ? "✏️ Update Contact" : "➕ Add Contact"}
        </button>
        {editingContact && (
          <button type="button" onClick={handleCancel} className="btn-cancel">
            ❌ Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ContactForm;