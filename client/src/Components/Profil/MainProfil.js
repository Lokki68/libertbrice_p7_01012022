import React from 'react';
import styled from 'styled-components';
import UpdateProfil from './UpdateProfil';

export default function MainProfil() {
  return (
    <Container>
      <UpdateProfil />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 200px);
`;
