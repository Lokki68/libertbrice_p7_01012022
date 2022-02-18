import React from 'react';
import styled from 'styled-components';

export default function CardComment({ comments, commentOn }) {
  console.log(commentOn);

  return (
    <Container>
      {comments.map((comment) => {
        return (
          <Content key={comment.id}>
            <img src='./uploads/profil/random_user.jpg' alt='profil' />
            <Comment>
              <p>{comment.content}</p>
            </Comment>
          </Content>
        );
      })}
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: rgba(252, 47, 8, 0.1);
  border-radius: 999px;
  box-shadow: inset 0px 4px 4px rgba(4, 4, 4, 0.25);
`;
