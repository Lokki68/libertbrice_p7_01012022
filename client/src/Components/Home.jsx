import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersReducer } from '../Redux/User/usersReducer';
import { getAllUsers } from '../Api/user';
import styled from 'styled-components';
import { VscGlobe } from 'react-icons/vsc';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers().then((res) => {
      console.log(res);
      dispatch(getUsersReducer(res.data));
    });
  }, []);

  return (
    <Container>
      <VscGlobe size={50} color={'white'} />
      <h1>Bienvenue sur Groupomania</h1>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../img/photo_entreprise.jpg') no-repeat center/cover;

  h1 {
    font-size: 3em;
    margin-left: 1rem;
    color: #fff;
  }
`;
