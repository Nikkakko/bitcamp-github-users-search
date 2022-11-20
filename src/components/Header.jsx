import React from 'react';
import styled from 'styled-components';
import sunIcon from '../assets/icon-sun.svg';
import moonIcon from '../assets/icon-moon.svg';

const Header = ({ light, toggleTheme }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>devfinder</HeaderTitle>
      <HeaderIcon onClick={toggleTheme}>
        <Text>{light ? 'dark' : 'light'}</Text>
        <Icon src={light ? moonIcon : sunIcon} alt='icon' />
      </HeaderIcon>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  /* margin-top: 144px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${props => props.theme.numberColor};
`;

const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${props => props.theme.text};

  &:hover {
    color: ${props => props.theme.headerHover};
  }
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

export default Header;
