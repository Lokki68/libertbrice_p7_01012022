import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export default function UploadPicture() {
  return (
    <Container>
      <input type='text' name='username' id='username' placeholder='Username' />
      <Admin>Admin</Admin>
      <FormContainer>
        <img src='./uploads/profils/random_user.jpg' alt='profil' />
        <label htmlFor='image'>Photo de Profil</label>
        <input type='file' name='image' id='image' accept='.jpg, .jpeg, .png' />

        <input type='submit' value='Enregistrer' />
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  grid-area: L;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  margin-left: 5px;

  input[type='text'] {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
  }
`;

const Admin = styled.div`
  background: ${colors.tertiary};
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 160px;
    height: 160px;
    margin-top: 50px;
  }

  label {
    margin: 15px;
    padding: 8px;
    background: ${colors.primary};
    border-radius: 999px;
    cursor: pointer;
  }

  input[type='file'] {
    display: none;
  }
`;
