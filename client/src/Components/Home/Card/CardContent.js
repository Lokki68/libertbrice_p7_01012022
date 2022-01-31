import React from 'react';
import styled from 'styled-components';
import { isEmpty } from '../../../utils/utils';

export default function CardContent({ post }) {
  return (
    <Container>
      <Content>
        {!isEmpty(post.image) ? (
          <img src={post.image} alt='' />
        ) : (
          ''
        )}
        <p>{post.message}</p>
        <button className='material-icons'>edit</button>
      </Content>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 50%;
    height: auto;
  }

  button {
    position: absolute;
    font-size: 18px;
    right: 5px;
    border: 0;
    color: grey;

    &:hover {
      color: black;
    }
  }
`;
