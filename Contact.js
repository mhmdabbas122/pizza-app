// ...existing code...
import React, { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
// removed unused ContactItem import
import { ContactList } from "../helpers/ContactList";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState(ContactList || []);
  const [hasSubmitted, setHasSubmitted] = useState(false); // track if user clicked submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const newEntry = {
      fullname: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };
    setEntries(prev => [newEntry, ...prev]);
    setName("");
    setEmail("");
    setMessage("");
    setHasSubmitted(true);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter full name:"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Enter email:"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Enter message:"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit"> Send Message</button>
        </form>

        {/* show table only after user clicks Send Message */}
        {hasSubmitted && entries.length > 0 && (
          <table>
            <thead>
              <tr className="table">
                <th>Full name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((item, key) => (
                <tr key={key}>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Contact;
// ...existing code...