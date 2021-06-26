import React from 'react';
import { HiMenu } from 'react-icons/hi';

const Hamburger = () => {
  return (
    <div className="hamburger" onClick={
      () => document.querySelector(".nav-bar").classList.toggle("active")}>
      <HiMenu />
    </div>
    
  );
}

export default Hamburger;