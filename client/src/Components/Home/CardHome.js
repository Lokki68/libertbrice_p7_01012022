import React from 'react';
import styled from 'styled-components';

import CardAside from './Card/CardAside';

export default function CardHome() {
  return (
    <CardBox>
      <CardAside />
    </CardBox>
  );
}

// ----- Styled

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 950px;
  height: 300px;
  background-color: #fcd4d3;
  border-radius: 4px;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.2);
`;
