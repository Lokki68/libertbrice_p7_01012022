import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updatePost } from '../../../redux/actions/post.actions';

export default function EditPostMessage({ post, toggleFunc }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('Token');
  console.log(token);

  const handleMessage = (e) => {
    e.preventDefault();
    const header = `Bearer ${token}`;

    const postId = post.id;
    const data = {
      message,
      header,
    };

    dispatch(updatePost(postId, data));
    toggleFunc();
  };

  const handleCancel = (e) => {
    e.preventDefault();

    toggleFunc();
  };

  return (
    <Container>
      <FormWrapper>
        <label htmlFor='message'>Edit Message</label>
        <input
          type='text'
          name='message'
          id='message'
          defaultValue={post.message}
          onInput={(e) => setMessage(e.target.value)}
        />
        <ButtonContainer>
          <button className='material-icons' onClick={(e) => handleCancel(e)}>
            cancel
          </button>
          <button className='material-icons' onClick={(e) => handleMessage(e)}>
            send
          </button>
        </ButtonContainer>
      </FormWrapper>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  button {
    font-size: 18px;
    border: none;
    color: gray;

    &:hover {
      color: black;
    }
  }
`;
