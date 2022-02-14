import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
// import { refreshPage } from '../../utils/utils';
import { createPost } from '../../redux/actions/post.actions';

export default function PostForm(props) {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const { id } = props.user;


  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      userId: id,
      message: message,
      image: image,
    };

    dispatch(createPost(newPost));
  };

  return (
    <Container>
      <FormWrapper onSubmit={addPost}>
        <h2>Votre nouveau post :</h2>
        <MessageInput>
          <textarea
            placeholder='Votre message ...'
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </MessageInput>

        <ImageInput>
          <label htmlFor='image'>Choisir une image</label>
          <input
            type='file'
            name='image'
            id='image'
            accept='.jpg, .jpeg, .png'
            onChange={(e) => setImage(e.target.files[0])}
          />
        </ImageInput>
        <ButtonWrapper>
          <button onClick={() => props.toggleFunc()}  >Cancel</button>
          <button onClick={addPost}>Envoyer</button>
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  margin-top: 10px;
  background-color: ${colors.primary};
  border-radius: 4px;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.2);
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    margin-bottom: 20px;
  }

  h3 {
    margin-top: 20px;
  }

  textarea {
    width: 400px;
    height: 100px;
  }

  input[type='file'] {
    display: none;
  }

  button {
    border-radius: 4px;
    background-color: ${colors.tertiary};
    margin: 0 15px;
  }
`;

const MessageInput = styled.div``;

const ImageInput = styled.div``;

const ButtonWrapper = styled.div``;
