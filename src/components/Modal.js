import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ closeModal, submitForm }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    roomNumber: '',
    complaintTitle: '',
    complaintDescription: '',
    complaintCategory: 'Mess', //Default category
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <div className="modal-overlay">
      <button onClick={closeModal} className='close-modal'>Close Modal</button>
      <div className="modal">
        <h2>Submit a Complaint</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name of Student:
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Roll Number:
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Room Number:
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Complaint Title:
            <input
              type="text"
              name="complaintTitle"
              value={formData.complaintTitle}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Complaint Description:
            <textarea
              name="complaintDescription"
              value={formData.complaintDescription}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Category of Complaint:
            <select
              name="complaintCategory"
              value={formData.complaintCategory}
              onChange={handleChange}
            >
              <option value="Mess">Mess</option>
              <option value="Electrical">Electrical</option>
              <option value="Hygiene">Hygiene</option>
              <option value="Internet/LAN/Wifi">Internet/LAN/Wifi</option>
            </select>
          </label>

          <button type="submit">Submit Complaint</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
