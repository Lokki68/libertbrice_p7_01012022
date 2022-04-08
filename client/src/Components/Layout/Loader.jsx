import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../Utils/styles/color';

export default function Loader() {
  return (
    <LoaderWrapper>
      <LoaderSquare />
    </LoaderWrapper>
  );
}

// ----- Keyframes

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    opacity:.5;
  }
  to{
    opacity:.9;
    transform: rotate(360deg);
  }
`;

// ----- Styled

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoaderSquare = styled.div`
  width: 20px;
  height: 20px;
  padding: 20px;
  border: 2px solid ${colors.tertiary};
  border-bottom: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
