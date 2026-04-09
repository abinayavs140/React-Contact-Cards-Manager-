import React, { useState } from "react";

function ContactForm({ addContact }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    bio: "",
    avatar: ""
  });

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

    addContact(formData);

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
      <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="avatar" placeholder="Avatar URL" value={formData.avatar} onChange={handleChange} />
      <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange}></textarea>

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;