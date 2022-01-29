import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import Loader from '../Loader/Loader';
import CardHome from './CardHome';
import PostForm from './PostForm';

export default function MainHome() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      {isLoading && <Loader />}
      <PostForm />
      <ContainerHomeCard>
        <CardHome />
        <CardHome />
        
      </ContainerHomeCard>
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
