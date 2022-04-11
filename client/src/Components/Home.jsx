import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersReducer } from '../Redux/User/usersReducer';
import { getAllUsers } from '../Api/user';
import styled from 'styled-components';
import { VscGlobe } from 'react-icons/vsc';
import Posts from './Post/Posts';
import { getAllPosts } from '../Api/posts';
import { getAllPostsReducer } from '../Redux/Posts/postsReducer';

export default function Home() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAllUsers().then((res) => {
      dispatch(getUsersReducer(res.data));
    });

    getAllPosts().then((res) => {
      setIsLoaded(!isLoaded);
      dispatch(getAllPostsReducer(res));
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
        <Posts />
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
