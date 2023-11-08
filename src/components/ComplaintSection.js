// import React, { useState } from 'react';
// import { Element } from 'react-scroll';
// import Complaints from "./ComplaintData.js"
// import "./ComplainSection.css";

// export default function ComplaintSection() {
//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = window.innerWidth >= 768 ? 10 : 5; // Adjust the number of cards per page for different screen sizes
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const displayedComplaints = Complaints.slice(startIndex, endIndex);

//   // Accordion

//   // Filter by status
//   const [filteredComplaints, setFilteredComplaints] = useState(Complaints);
//   const [currentStatus, setCurrentStatus] = useState('All');

//   const handleStatusChange = (status) => {
//     setCurrentStatus(status);

//     if (status === 'All') {
//       setFilteredComplaints(Complaints);
//     } else {
//       const filtered = Complaints.filter((complaint) => complaint.status === status);
//       setFilteredComplaints(filtered);
//     }
//     setCurrentPage(1); // Reset to the first page when changing the filter
//   };

//   return (
//     <Element name="complaints" className="complaint-section">
//       <h2>Complaints</h2>
//       <div className="status-filter">
//         <button
//           onClick={() => handleStatusChange('All')}
//           className={currentStatus === 'All' ? 'active' : ''}
//         >
//           All
//         </button>
//         <button
//           onClick={() => handleStatusChange('Waiting for Approval')}
//           className={currentStatus === 'Waiting for Approval' ? 'active' : ''}
//         >
//           Waiting for Approval
//         </button>
//         <button
//           onClick={() => handleStatusChange('Pending')}
//           className={currentStatus === 'Pending' ? 'active' : ''}
//         >
//           Pending
//         </button>
//         <button
//           onClick={() => handleStatusChange('Done')}
//           className={currentStatus === 'Done' ? 'active' : ''}
//         >
//           Done
//         </button>
//       </div>
//       <div className="complaint-cards">
//         {filteredComplaints.map((complaint, index) => (
//           <div
//             className={`complaint-card ${expandedComplaint === complaint ? 'expanded' : ''}`}
//             key={index}
//             onClick={() => setExpandedComplaint(complaint)}
//           >
//           </div>
//         ))}
//       </div>
//       <Pagination
//         currentPage={currentPage}
//         totalPages={Math.ceil(Complaints.length / pageSize)}
//         onPageChange={setCurrentPage}
//       />
//     </Element>
//   );
// }

// function Pagination({ currentPage, totalPages, onPageChange }) {
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <div className="pagination">
//       {pageNumbers.map((pageNumber) => (
//         <button
//           key={pageNumber}
//           onClick={() => onPageChange(pageNumber)}
//           className={currentPage === pageNumber ? 'active' : ''}
//         >
//           {pageNumber}
//         </button>
//       ))}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Complaints from './ComplaintData.js'; // Import your complaint data
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
    } else {
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
          onClick={() => setCurrentStatus('Waiting for Approval')}
          className={currentStatus === 'Waiting for Approval' ? 'active' : ''}
        >
          Waiting for Approval
        </button>
        <button
          onClick={() => setCurrentStatus('Pending')}
          className={currentStatus === 'Pending' ? 'active' : ''}
        >
          Pending
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
              <h3>{complaint.studentName}</h3>
              <p>Roll Number: {complaint.rollNumber}</p>
              <p>Room Number: {complaint.roomNumber}</p>
              <p>Category: {complaint.category}</p>
              <p>Status: {complaint.status}</p>
              {expandedCard === complaint && (
              <div className="complaint-description">
                <p>{complaint.complaint}</p>
              </div>
            )}
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
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={currentPage === pageNumber ? 'active' : ''}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
