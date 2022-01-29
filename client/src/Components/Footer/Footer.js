import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export default function Footer() {
  return (
    <FooterContainer>
      <img src='./img/logo1.png' alt='Logo Groupomania' />
      <span>
        <p>2 Manchester Road, W28 6KH</p>
        <p>(406) 555-0120 </p>
        <a href='mailto: tienlapspktnd@gmail.com'>tienlapspktnd@gmail.com</a>
      </span>
    </FooterContainer>
  );
}

// ----- Styled

const FooterContainer = styled.footer`
  width: 100%;
  height: 110px;
  position: absolute;
  bottom: 0;
  background-color: ${colors.quatriary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 80px;
    margin-left: 80px;
  }

  span {
    font-family: Inconsolata, sans-serif;
    font-size: 16px;
    line-height: 1.8;
    display: flex;
    flex-direction: column;
    color: ${colors.primary};
    margin-right: 80px;
  }
`;
