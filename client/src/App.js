import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';

import Container from './Components/Layout/Container';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import RequireAuth from './Utils/RequireAuth';
import Home from './Components/Home';
import Annuaire from './Components/Annuaire/Annuaire';
import Profil from './Components/Profil/Profil';

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
            path='/annuaire'
            element={
              <RequireAuth withAuth={true}>
                <Annuaire />
              </RequireAuth>
            }
          />
          <Route
            path='/profil'
            element={
              <RequireAuth withAuth={true}>
                <Profil />
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
