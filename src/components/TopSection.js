import React ,{useState}from 'react';
import {Link} from 'react-scroll';
import './TopSection.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Logo from "../assets/square_logo.png";
import RoundLogo from "../assets/logo.png";
import Modal from "./Modal";
 
export default function TopSection() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };  

  // Function to submit form
  const submitForm = (formData) => {
    console.log('Form data submitted:', formData);
    closeModal();
  };
  
  return (
      <div className="top-section">
        <nav className="navbar">
            <img src={Logo} alt="CMS Logo" className='logo'/>
            <div className="complaint-button" onClick={openModal}>
              <FiberManualRecordIcon />
              <button className='complaint'>File a Complaint</button>
            </div>
            <div className="nav-links">
                <Link to="about" smooth={true} className='nav-link'>About CMS</Link>
                <Link to="complaints" smooth={true} className='nav-link'>Complaints</Link>
            </div>
            <div className='user-profile'>
              <AccountCircleOutlinedIcon sx={{color : "#4051C2"}}/>
              <p className='user-name'>John Doe</p>
            </div>
        </nav>
        <div className="head-section">
          <img className="system-logo" src={RoundLogo} alt="System Logo" />
          <h1 className="system-name">Complaint Management System</h1>
        </div>
        {isModalOpen && <Modal closeModal={closeModal} submitForm={submitForm}/>}
      </div>
    );
}