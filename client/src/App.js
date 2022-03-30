import React from 'react';
import styled from 'styled-components';

import Container from './Components/Layout/Container';

export default function App() {
  return (
    <Content>
      <Container>
        <h1>Hello App</h1>
      </Container>
    </Content>
  );
}

const Content = styled.div`
  text-align: center;
  height: 100vh;
`;
