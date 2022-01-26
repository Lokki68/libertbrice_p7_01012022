import React from 'react';
import styled from 'styled-components';

export default function CardComment() {
  return (
    <Container>
      <Content>
        <img src='./uploads/profils/random_user.jpg' alt='profile' />
        <Comment>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            tenetur in ipsum ipsam excepturi blanditiis. Nesciunt dolorem
            explicabo nemo commodi.
          </p>
        </Comment>
      </Content>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  width: 100%;
  background-color: #c4c4c4;
  height: auto;
  padding: 15px;
  padding-bottom: 0;

  &:last-child {
    border-radius: 0 0 4px 4px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ababab;

  img {
    width: 35px;
    border-radius: 50%;
    margin-right: 15px;
    box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.4);
  }
`;

const Comment = styled.div`
  padding: 10px;
  background-color: rgba(252, 47, 8, 0.1);
  border-radius: 999px;
  box-shadow: inset 0px 4px 4px rgba(4, 4, 4, 0.25);
`;
