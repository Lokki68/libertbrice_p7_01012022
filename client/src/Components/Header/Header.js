import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import LogOut from '../Connexion/LogOut';

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <NavLink to='/home'>
          <img src='./img/logo_header_white.jpg' alt='Logo Groupomania' />
        </NavLink>
      </LogoContainer>
      <NavContainer>
        <NavLink to='/profil' className='btn'>
          <img src='./img/logo_planete.svg' alt='Profil' />
          Profil
        </NavLink>
        <NavLink to='/annuaire' className='btn'>
          Annuaire
        </NavLink>
      </NavContainer>
      <LogoutContainer>
        <LogOut />
      </LogoutContainer>
    </Container>
  );
}

// ----- Styled
const Container = styled.header`
  height: 90px;
  width: 100%;
  background-color: ${colors.tertiary};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 45px);
  grid-template-areas:
    'L  D'
    'N  N';

  @media (min-width: 815px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 90px;
    grid-template-areas: 'L N D';
  }
`;

const LogoContainer = styled.div`
  grid-area: L;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  grid-area: N;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 35px;
    color: ${colors.white};
    text-decoration: none;
    background-color: ${colors.tertiary};
    box-shadow: 2px 2px 2px ${colors.black}, inset 2px 2px 2px ${colors.white};
    font-size: 16px;
    font-family: Roboto, sans-serif;
    margin: 0 15px;

    img {
      margin-right: 10px;
      width: 30px;
    }

    &.active,
    &:hover {
      box-shadow: 2px 2px 2px ${colors.white}, inset 2px 2px 2px ${colors.black};
    }
  }
`;

const LogoutContainer = styled.div`
  grid-area: D;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: ${colors.tertiary};
    color: ${colors.white};
    font-size: 12px;
    text-transform: uppercase;

    &:hover {
      background-color: ${colors.secondary};
    }
  }
`;
