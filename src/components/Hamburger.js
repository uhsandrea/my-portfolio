import React from 'react';

const Hamburger = () => {
  return (
    <div className="hamburger" onClick={() => {
      document.querySelector(".nav-bar").classList.toggle("active");
      document.querySelector(".hamburger").classList.toggle("active");
    }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
  );
}

export default Hamburger;