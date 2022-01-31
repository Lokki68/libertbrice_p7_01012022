import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

import CardAside from './Card/CardAside';
import CardComment from './Card/CardComment';
import CardContent from './Card/CardContent';

export default function CardHome({ post }) {
  const comments = post.comments;
  const likes = post.likes;

  return (
    <Container>
      <CardBox>
        <CardAside likes={likes} date={post.date}  />
        <CardContent post={post} />
      </CardBox>
      {comments.length > 0 ? <CardComment comments={comments} /> : ''}
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 950px;
  margin: 10px 0;

  @media (max-width: 970px) {
    width: 80%;
    height: auto;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  margin-bottom: 0;
  width: 100%;
  height: 300px;
  background-color: ${colors.primary};
  border-radius: 4px;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.4);
  z-index: 10;

  @media (max-width: 970px) {
    flex-direction: column;
    height: auto;
  }
`;
