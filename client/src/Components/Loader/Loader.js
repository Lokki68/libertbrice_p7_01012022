import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils/styles/colors';

export default function Loader() {
  return (
    <LoaderWrapper>
      <LoaderSquare />
    </LoaderWrapper>
  );
}

// ----- Styled

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const LoaderSquare = styled.div`
  width: 10px;
  padding: 20px;
  height: 10px;
  border: 2px solid ${colors.tertiary};
  border-bottom: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
`;
