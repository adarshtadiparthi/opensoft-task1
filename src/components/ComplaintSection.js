import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Complaints from './ComplaintData.js'; // Importing complaint data
import './ComplainSection.css';

export default function ComplaintSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = window.innerWidth >= 768 ? 10 : 5; // Adjust the number of cards per page for different screen sizes

  // State for filtered complaints
  const [filteredComplaints, setFilteredComplaints] = useState(Complaints);
  const [currentStatus, setCurrentStatus] = useState('All');

  // Update filteredComplaints when status changes
  useEffect(() => {
    if (currentStatus === 'All') {
      setFilteredComplaints(Complaints);
    } 
    else {
      const filtered = Complaints.filter((complaint) => complaint.status === currentStatus);
      setFilteredComplaints(filtered);
    }
    setCurrentPage(1); // Reset to the first page when changing the filter
  }, [currentStatus]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedComplaints = filteredComplaints.slice(startIndex, endIndex);

  //Accordion
  const [expandedCard, setExpandedCard] = useState(null);
  const toggleCard = (complaint) => {
    if (expandedCard === complaint) {
      setExpandedCard(null);
    } else {
      setExpandedCard(complaint);
    }
  };

  return (
    <Element name="complaints" className="complaint-section">
      <h2>Complaints</h2>
      <div className="status-filter">
        <button
          onClick={() => setCurrentStatus('All')}
          className={currentStatus === 'All' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => setCurrentStatus('Pending')}
          className={currentStatus === 'Pending' ? 'active' : ''}
        >
          Pending
        </button>
        <button
          onClick={() => setCurrentStatus('Waiting for Approval')}
          className={currentStatus === 'Waiting for Approval' ? 'active' : ''}
        >
          Waiting for Approval
        </button>
        <button
          onClick={() => setCurrentStatus('Done')}
          className={currentStatus === 'Done' ? 'active' : ''}
        >
          Done
        </button>
      </div>
      <div className="complaint-cards">
        {displayedComplaints.map((complaint, index) => (
          <div className={`complaint-card ${expandedCard === complaint ? 'expanded' : ''}`} key={index} onClick={() => toggleCard(complaint)}>
          <div className="complaint-header">
            <h3>{complaint.category}</h3>
            <p>Date: {complaint.date}</p>
          </div>
          <div className="complaint-body">
            <p>Name: {complaint.studentName}</p>
            <p>Room Number: {complaint.roomNumber}</p>
            <p>Roll Number: {complaint.rollNumber}</p>
          </div>
          <div className="complaint-footer">
            <p>Status: {complaint.status}</p>
            {expandedCard === complaint && (
              <div className="complaint-description">
                <p>{complaint.complaint}</p>
              </div>
            )}
          </div>
        </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredComplaints.length / pageSize)}
        onPageChange={setCurrentPage}
      />
    </Element>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>&lt;</button>
      )}

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={currentPage === pageNumber ? 'active' : ''}
        >
          {pageNumber}
        </button>
      ))}

      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>&gt;</button>
      )}
    </div>
  );
}
