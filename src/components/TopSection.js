import React from 'react';
import {Link} from 'react-scroll'
import Logo from "../assets/river-mountain-scenery-wallpaper-2560x1080_14.jpg"
 
export default function TopSection() {
    return (
      <div className="top-section">
        <nav className="navbar">
            <div className="logo">
            <img src="logo.png" alt="CMS Logo" />
            </div>
            <div className="nav-links">
                <Link to="about" smooth={true}>About CMS</Link>
                <Link to="complaints" smooth={true}>Complaints</Link>
            </div>
            <button className="complaint-button" onClick={() => alert("Dummy complaint button clicked")}>File a Complaint</button>
        </nav>
        <header className="head-section">
            <h1>Complaint Management System</h1>
            <img src="cms-image.png" alt="CMS Image" />
        </header>
      </div>
    );
}