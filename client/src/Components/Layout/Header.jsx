import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {colors} from '../../Utils/styles/color';

import {VscGlobe} from 'react-icons/vsc';
import {logoutUserReducer} from '../../Redux/User/userReducer';
import {GiHamburgerMenu} from "react-icons/gi";
import Menu from "./Menu";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLogged, infos} = useSelector((state) => state.user);
  const [navMenu, setNavMenu] = useState(false);

  const onLogout = () => {
    localStorage.removeItem('groupomania-token');
    localStorage.removeItem('groupomania-id');
    dispatch(logoutUserReducer());
    navigate('/login');
  };

  const toggleNavMenu = () => {
    setNavMenu(!navMenu)
  }

  return (
    <Container>
      <LogoContainer>
        <VscGlobe size={25}/>
        <p>Groupomania</p>
      </LogoContainer>
      <BurgerNavigation >
        <button className='burgerBtn' onClick={() => toggleNavMenu()} ><GiHamburgerMenu size={20} /></button>
      </BurgerNavigation>
      {navMenu && <Menu toggleFunc={toggleNavMenu} decoFunc={onLogout} />}

      {isLogged ? (
        <NavMainContainer>
          <NavLink to='/' className='btn'>
            Home
          </NavLink>
          <NavLink to='/annuaire' className='btn'>
            Annuaire
          </NavLink>
          <NavLink to='/profil' className='btn'>
            Profil
          </NavLink>
          <button className='btn' onClick={onLogout}>
            Déconnection
          </button>
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
      {
        isLogged && (
          <IdContainer>
            {infos.admin ? (
              <div className="adminNav">
                <Link
                  to='/admin'
                >{infos.username}</Link>
                <span className="material-icons">star</span>
              </div>) : (
              <p className="name">
                {infos.username}
              </p>
            )
            }
          </IdContainer>
        )
      }
    </Container>
  );
}

// ----- Styled

const Container = styled.header`
  position: relative;
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
    border: none;
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

  @media (min-width: 1090px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 90px;
    grid-template-areas: 'logo nav deconnect';
  }
  
  @media (max-width: 734px){
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

const BurgerNavigation = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  
  .burgerBtn {
    border: none;
    background: ${colors.secondary};
    border-radius: 5px;
    box-shadow: 2px 4px 6px rgba(0,0,0,.6);

  }
  
  @media screen and (min-width: 735px){
    display: none;
  }
`;

const NavMainContainer = styled.nav`
  grid-area: nav;
  display: none;
  justify-content: center;
  align-items: center;


  @media screen and (min-width: 735px ) {
    display: flex;
  }
`;

const NavConnectContainer = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IdContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 2rem;
  color: #fff;
  
  @media screen and (min-width: 735px){
    bottom: 50%;    
    right: 10px;
  }




  .adminNav {
    a{
      font-size: 2rem;
      color: #fff;
    }
    
    span{
      color: #000;
    }
  }
`;
