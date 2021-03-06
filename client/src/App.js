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
import ProfilFormInfo from './Components/Profil/ProfilFormInfo';
import PostForm from './Components/Post/PostForm';
import PostDetail from './Components/Post/PostDetail';
import CommentForm from './Components/Post/CommentForm';
import DeleteComment from "./Components/Post/DeleteComment";
import AdminProfilForm from "./Components/Admin/AdminProfilForm";
import Admin from "./Components/Admin/Admin";
import ProfilFormPhoto from "./Components/Profil/ProfilFormPhoto";

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
            path='/post/:id'
            element={
              <RequireAuth withAuth={false}>
                <PostDetail />
              </RequireAuth>
            }
          />
          <Route
            path='/post/delete/:id'
            element={
              <RequireAuth withAuth={false}>
                <DeleteComment />
              </RequireAuth>
            }
          />
          <Route
            path='/postform'
            element={
              <RequireAuth withAuth={true}>
                <PostForm />
              </RequireAuth>
            }
          />
          <Route
            path='/post/:id/editForm'
            element={
              <RequireAuth withAuth={true}>
                <PostForm />
              </RequireAuth>
            }
          />
          <Route
            path='/post/:id/commentForm'
            element={
              <RequireAuth withAuth={true}>
                <CommentForm />
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
            path='/profilforminfo'
            element={
              <RequireAuth withAuth={true}>
                <ProfilFormInfo />
              </RequireAuth>
            }
          />

          <Route
            path='/profilformphoto'
            element={
              <RequireAuth withAuth={true}>
                <ProfilFormPhoto />
              </RequireAuth>
            }
          />

          <Route
            path='/admin'
            element={
              <RequireAuth withAuth={true}>
                <Admin />
              </RequireAuth>
            }
          />
          <Route
            path='/admin/profilForm'
            element={
              <RequireAuth withAuth={true}>
                <AdminProfilForm />
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
