import React from 'react';
import { Element } from 'react-scroll';

export default function AboutCMS() {
    const aboutText = "The Complaint Management System (CMS) is a user-friendly platform designed to help students and staff easily report and manage various types of complaints. Whether it's related to maintenance, facilities, or services, CMS ensures a streamlined process for resolving issues promptly.";
    
    return (
      <Element name="about" className="about-section">
        <h2>About CMS</h2>
        <p>{aboutText}</p>
      </Element>
    );
}