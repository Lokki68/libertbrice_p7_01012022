import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../Utils/styles/color';

import { VscGlobe } from 'react-icons/vsc';

export default function Header() {
  const [isLogged, setLogged] = useState(false);

  return (
    <Container>
      <LogoContainer>
        <VscGlobe size={25} />
        <p>Groupomania</p>
      </LogoContainer>
      {isLogged ? (
        <NavMainContainer>
          <NavLink to='/annuaire' className='btn'>
            Annuaire
          </NavLink>
          <NavLink to='/profil' className='btn'>
            Profil
          </NavLink>
          <NavLink to='/' className='btn'>
            Se déconnecter
          </NavLink>
        </NavMainContainer>
      ) : (
        <NavConnectContainer>
          <NavLink to='/login' className='btn'>
            Se Connecter
          </NavLink>
          <NavLink to='/signup' className='btn'>
            S'enregistrer
          </NavLink>
        </NavConnectContainer>
      )}
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
    'logo logo'
    'nav nav';

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
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

  @media (min-width: 815px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 90px;
    grid-template-areas: 'logo nav deconnect';
  }
`;

const LogoContainer = styled.div`
  grid-area: logo;
  margin: 0 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
  }

  p {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
  }
`;

const NavMainContainer = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavConnectContainer = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;
`;
