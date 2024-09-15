import React from 'react';
import logo from  "../assets/images/logo.png"; // Adjust the path as needed

function Logo() {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
    </div>
  );
}

export default Logo;
