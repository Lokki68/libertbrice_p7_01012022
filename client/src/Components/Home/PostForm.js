import React from 'react';
import styled from 'styled-components';

export default function PostForm() {
  return (
    <Container>
      <FormWrapper>
        <h2>Votre nouveau post :</h2>
        <MessageInput>
          <textarea placeholder='Votre message ...'></textarea>
        </MessageInput>
        <h3>Inserer une image :</h3>
        <ImageInput>
          <input type='file' name='image' id='image' />
        </ImageInput>
        <ButtonWrapper>
          <button>Cancel</button>
          <button>Envoyer</button>
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
  background-color: #fcd4d3;
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
    width: 150px;
  }

  button {
    border-radius: 20px;
    background-color: #fc2f08;
    margin: 0 15px;
  }
`;

const MessageInput = styled.div``;

const ImageInput = styled.div``;

const ButtonWrapper = styled.div``;
