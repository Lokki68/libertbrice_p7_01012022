import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export default function Header() {
  return (
    <Container>
      <NavLink to='/'>
        <img src='./img/logo_header_white.jpg' alt='Logo Groupomania' />
      </NavLink>
    </Container>
  );
}

// ----- Styled

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: ${colors.tertiary};
`;
