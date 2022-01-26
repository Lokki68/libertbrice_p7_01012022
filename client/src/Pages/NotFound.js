import React from 'react';
import { styled } from 'styled-components';

export default function NotFound() {
  return (
    <Container>
      <span>
        <h1>Désolé cette page n'existe pas</h1>
      </span>
    </Container>
  );
}

// ----- Styled


const Container = styled.div`
  span {
    font-family: Incosolata;
  }
`;
