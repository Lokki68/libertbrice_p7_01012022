import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Components/Layout/Container';
import Login from './Components/User/Login';
import Register from './Components/User/Register';

export default function App() {
  return (
    <Content>
      <Container>
        <Routes>
          <Route path='/signup' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>
    </Content>
  );
}

const Content = styled.div`
  text-align: center;
  height: 100vh;
`;
