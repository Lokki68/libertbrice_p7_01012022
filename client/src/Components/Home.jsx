import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersReducer } from '../Redux/User/usersReducer';
import { getAllUsers } from '../Api/user';
import styled from 'styled-components';
import { VscGlobe } from 'react-icons/vsc';
import Topics from './Topic/Topics';

export default function Home() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getAllUsers().then((res) => {
      dispatch(getUsersReducer(res.data));
    });
  }, []);

  return (
    <Container>
      {!isLoaded ? (
        <div>
          <VscGlobe size={50} color={'white'} />
          <h1>Bienvenue sur Groupomania</h1>
        </div>
      ) : (
        <Topics />
      )}
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
