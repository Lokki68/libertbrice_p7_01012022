import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import colors from '../Utils/styles/colors';

export default function NotFound() {
  return (
    <Container>
      <Info>
        <GlichBloc>
          <p className='invisible-text'>404</p>
          <p className='glitchedAnim'>404</p>
          <p className='glitchedAnim'>404</p>
          <p className='glitchedAnim'>404</p>
        </GlichBloc>

        <p className='txt-info'>Woopsy, cette page n'existe pas ...</p>
        <NavLink to='/home'>Go Home</NavLink>
      </Info>
    </Container>
  );
}

// ----- Keyframes

const skewAnim = keyframes`
  20%{
    transform: none;
  }
  23%{
    transform: skew(5deg, -5deg) translate(10px, 5px);
  }
  26%{
    transform: none;
  }
  40%{
    transform: none;
  }
  43%{
    transform: skew(5deg, -10deg) translate(-5px, 2px);
  }
  46%{
    transform: none;
  }
  100%{
    transform: none;
  }
`;

const glitchAnim1 = keyframes`
7% {
    transform: none;
  }
  10% {
    transform: translate(6px, -2px);
  }
  13% {
    transform: none;
  }
  20% {
    transform: none;
  }
  23% {
    transform: translate(-12px, -7px);
  }
  26% {
    transform: none;
  }
  40% {
    transform: none;
  }
  43% {
    transform: translate(10px, -9px);
  }
  46% {
    transform: none;
  }
  65% {
    transform: none;
  }
  68% {
    transform: translate(7px, 5px);
  }
  71% {
    transform: none;
  }
  100% {
    transform: none;
  }
`;

const glitchAnim2 = keyframes`
  7% {
    transform: none;
  }
  10% {
    transform: translate(-6px, 2px);
  }
  13% {
    transform: none;
  }
  20% {
    transform: none;
  }
  23% {
    transform: translate(12px, 7px);
  }
  26% {
    transform: none;
  }
  40% {
    transform: none;
  }
  43% {
    transform: translate(-10px, 9px);
  }
  46% {
    transform: none;
  }
  65% {
    transform: none;
  }
  68% {
    transform: translate(-7px, -5px);
  }
  71% {
    transform: none;
  }
  100% {
    transform: none;
  }
`;

// ----- Styled
const Container = styled.div`
  height: 100vh;
  background-color: ${colors.quatriary};
`;

const Info = styled.div``;

const GlichBloc = styled.div``;
