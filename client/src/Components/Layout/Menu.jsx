import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {colors} from "../../Utils/styles/color";


export default function Menu({toggleFunc}) {
  return (
    <Container>
      <ul onClick={toggleFunc}>
        <li>
          <Link to='/postform'>Nouveau Post</Link>
        </li>
      </ul>
    </Container>
  );
}

// ---- Styled

const Container = styled.div`
  position: absolute;
  top: 45px;
  right: 10px;
  width: 15%;
  height: 80px;
  border-radius: 5px;
  background: rgba(0,0,0,.4);
  z-index: 100;
  transition: .2s ease-in-out;
  
  ul {
    margin: 20px auto;
    list-style: none;
    
    li {
      height: 20px;
    }
  }
  
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
    padding: 5px 10px;
    border-radius: 3px;
    box-shadow:4px 4px 8px rgba(255, 255, 255, .6);
    background: ${colors.secondary};
    
    &:hover{
      box-shadow: 2px 2px 6px rgba(255, 255, 255, .6);
    }
  }
`