import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { createComment } from '../../../redux/actions/comment.actions';

export default function PostComment({ id, commentFunc }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const userId = parseInt(localStorage.getItem('UserId'), 10);
  const postId = id;

  const sendComment = () => {
    const data = {
      userId,
      content: comment,
    };

    dispatch(createComment(postId, data));
    commentFunc();
  };

  return (
    <Container>
      <Content>
        <Comment>
          <input
            type='text'
            name='comment'
            id='comment'
            onInput={(e) => setComment(e.target.value)}
          />
          <button className='material-icons' onClick={sendComment}>
            send
          </button>
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
`;

const Content = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ababab;
`;

const Comment = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: rgba(252, 47, 8, 0.1);
  border-radius: 999px;
  box-shadow: inset 0px 4px 4px rgba(4, 4, 4, 0.25);

  input {
    border: none;
    background-color: transparent;
    outline: none;
    margin-left: 15px;
    width: 100%;
  }

  button {
    font-size: 14px;
  }
`;
