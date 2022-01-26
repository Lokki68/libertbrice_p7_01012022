import React from 'react';
import styled from 'styled-components';

import CardAside from './Card/CardAside';
import CardComment from './Card/CardComment';
import CardContent from './Card/CardContent';

export default function CardHome() {
  return (
    <Container>
      <CardBox>
        <CardAside />
        <CardContent />
      </CardBox>
      <CardComment />
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 950px;
  margin: 10px 0;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  margin-bottom: 0;
  width: 100%;
  height: 300px;
  background-color: #fcd4d3;
  border-radius: 4px;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.4);
  z-index: 10;
`;
