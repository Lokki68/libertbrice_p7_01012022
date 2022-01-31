import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { isEmpty } from '../../utils/utils';
import Loader from '../Loader/Loader';
import CardHome from './CardHome';
import PostForm from './PostForm';

export default function MainHome() {
  const postsData = useSelector((state) => state.postsReducer);

  return (
    <Container>
      <PostForm />
      {isEmpty(postsData) && <Loader />}
      {
        !isEmpty(postsData) && (

      <ContainerHomeCard>
        { 
          postsData.map((post) =>{
            return <CardHome key={post.id} post={post} />
          })
        }
      </ContainerHomeCard>
        )}
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerHomeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;

  button {
    margin: 10px;
    border-radius: 20px;
    background-color: ${colors.primary};
  }
`;
