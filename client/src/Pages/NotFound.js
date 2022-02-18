import React from 'react';
import { NavLink } from 'react-router-dom';
import { colors } from '../utils/styles/colors';
import styled from 'styled-components';

import '../utils/styles/globalCss.css';

export default function NotFound() {
  return (
    <Container>
      <Info>
        <GlitchBloc>
          <p className='invisible-text'>404</p>
          <p className='glitchedAnim'>404</p>
          <p className='glitchedAnim'>404</p>
          <p className='glitchedAnim'>404</p>
        </GlitchBloc>

        <p className='txt-info'>Woopsy, this page doesn't existe</p>
        <NavLink to='/home'>Go Home</NavLink>
      </Info>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  height: 100vh;
  background-color: #000;
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .txt-info {
    font-family: Incosolata, sans-serif;
    color: #f1f1f1;
    line-height: 1.5;
  }

  a {
    color: ${colors.tertiary};
    font-size: 20px;
  }
`;

const GlitchBloc = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .glitchedAnim,
  .invisible-text {
    font-family: Roboto, serif;
    font-size: 250px;
    font-weight: 400;
    line-height: 1.1;
    color: #fff;
  }

  .glitchedAnim {
    position: absolute;
    top: 0;
    opacity: 0.9;

    &:nth-child(2) {
      color: ${colors.tertiary};
      animation: skewAnim 3s infinite;
    }

    &:nth-child(3) {
      color: #3df0cf;
      animation: glitchAnim2 3s infinite;
    }

    &:nth-child(4) {
      color: ${colors.primary};
      animation: glitchAnim1 3s infinite;
    }
  }

  .invisible-text {
    visibility: hidden;
  }
`;
