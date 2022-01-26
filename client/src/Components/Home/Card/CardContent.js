import React from 'react';
import styled from 'styled-components';

export default function CardContent() {
  return (
    <Container>
      <Content>
        <img src='./uploads/posts/blog-kyoto.png' alt='kyoto' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          repellendus!
        </p>
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
`;
