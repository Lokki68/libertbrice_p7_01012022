import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Components/Home';

import Container from './Components/Layout/Container';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import RequireAuth from './Utils/RequireAuth';

export default function App() {
  return (
    <Content>
      <Container>
        <Routes>
          <Route
            path='/'
            element={
              <RequireAuth withAuth={true}>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path='/signup'
            element={
              <RequireAuth withAuth={false}>
                <Register />
              </RequireAuth>
            }
          />
          <Route
            path='/login'
            element={
              <RequireAuth withAuth={false}>
                <Login />
              </RequireAuth>
            }
          />
        </Routes>
      </Container>
    </Content>
  );
}

const Content = styled.div`
  text-align: center;
  height: 100vh;
`;
