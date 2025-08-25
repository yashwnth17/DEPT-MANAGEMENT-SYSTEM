import React from 'react';
import styled from 'styled-components';
import citlogo from '../assets/citlogo.jpg';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={citlogo} alt="Logo" />
      {/* Add any other header elements or styling here */}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff; // Add your desired background color
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); // Add a box shadow if needed
`;

const StyledLogo = styled.img`
  width: 100px; // Adjust the width as needed
  height: auto; // Maintain aspect ratio
`;

export default Header;
