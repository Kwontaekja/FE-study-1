import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <nav className='footer'>
      <div className='footer-callNum'>
        <h3>1544-7198</h3>
      </div>
      <ul className='footer-menu'>
        <li>
          <StyledLink to='/company'>Company</StyledLink>
        </li>
        <li>
          <StyledLink to='/service'>Service</StyledLink>
        </li>
        <li>
          <StyledLink to='/pr'>PR</StyledLink>
        </li>
        <li>
          <StyledLink to='/faq'>FAQ</StyledLink>
        </li>
        <li>
          <StyledLink to='/career'>Career</StyledLink>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
