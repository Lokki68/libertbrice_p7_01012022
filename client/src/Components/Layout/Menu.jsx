import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate} from "react-router-dom";
import {colors} from "../../Utils/styles/color";
import {HiBookOpen, HiHome} from "react-icons/hi";
import {navlinks} from "../../Utils/navLink";
import {FaPen} from "react-icons/fa";
import {FiPower, FiSettings} from "react-icons/fi";


function Menu({ toggleFunc, decoFunc}) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Container onClick={toggleFunc}>
      <nav>
        {
          navlinks.map((navlink, index) => (
            <button onClick={() => navigate(`${navlink.link}`)} key={index} >
              <span>
                {
                  navlink.title === 'Home' ?
                    <HiHome size={20}/> :
                    <HiBookOpen size={20}/>
                }
              </span>
              {navlink.title}
            </button>
          ) )
        }
      </nav>
      {
        location.pathname === '/' && (
            <button onClick={() => navigate('/postform') }><span><FaPen size={20}/></span>Nouveau Post</button>
        )
      }

      <div className="userBtns">
        <button className="userBtn" onClick={() => navigate('/profil')} >
          <FiSettings size={20} />
        </button>
        <button className="userBtn" onClick={decoFunc} >
          <FiPower size={20} />
        </button>
      </div>
    </Container>
  );
}

export default Menu
// ---- Styled

const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 240px;
  height: 300px;
  border-radius: 5px;
  background: rgba(0,0,0,.4);
  box-shadow: 0 4px 6px rgba(0,0,0,.6);
  z-index: 100;
  
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin: 10px 0;
    border: none;
    border-radius: 3px;
    box-shadow:4px 4px 8px rgba(255, 255, 255, .6);
    background: ${colors.secondary};
    
    span {
      margin: 0 5px;
    }

    &:active{
      box-shadow: 2px 2px 6px rgba(255, 255, 255, .6);
    }
  }
  
  .userBtns {
    margin-top: auto;
    display: flex;
    justify-content: space-around;
    width: 100%;
    
    .userBtn{
      width: 40px;
      height: 40px;
      padding: 10px;
      border-radius: 50%;
    }
  }
  
  
`