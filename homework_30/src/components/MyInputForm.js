import React, { useState } from "react";
import './MyInputForm.css'

export default function MyInputForm({ getData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Поле 'ім'я' є обов'язковим");
      return;
    }

    if (!phone) {
      setPhoneError("Поле 'телефон' є обов'язковим");
      return;
    }
    if (!/^\d{12}$/.test(phone)) {
      setPhoneError("Телефон повинен містити 12 цифр");
      return;
    }

    setNameError("");
    setPhoneError("");

    getData({ name, email, phone });

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container-form" >
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="error">{nameError}</div>}
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-check">
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phoneError && <div className="error">{phoneError}</div>} 
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
}
