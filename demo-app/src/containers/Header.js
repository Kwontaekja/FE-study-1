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

function Header() {
  return (
    <nav className='header'>
      <div>
        <Link to='/'>
          <img
            src='https://carplat-prod-resources.s3.ap-northeast-2.amazonaws.com/logo/web_carplat_logo.png'
            width='100px'
            alt='Logo'
          />
        </Link>
      </div>
      <ul className='header-menu'>
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
      <div className='header-callNum'>
        <h3>1544-7198</h3>
      </div>
    </nav>
  );
}

export default Header;
