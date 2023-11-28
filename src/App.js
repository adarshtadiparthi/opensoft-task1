import React from 'react';
import './App.css';
import TopSection from "./components/TopSection";
import AboutCMS from './components/AboutCMS';
import ComplaintSection from './components/ComplaintSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <TopSection />
      <AboutCMS />
      <ComplaintSection />
      <Footer />
    </div>
  );
}

export default App;
