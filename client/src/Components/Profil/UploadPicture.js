import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export default function UploadPicture({ username, userpicture, admin }) {
  const [userPicture, setUserpicture] = useState('');

  const handleSubmit = () => {

    const userId = localStorage.getItem('UserId');



    const data = {
      userPicture, 

    }

  }


  return (
    <Container>
      <h1>
        {username}
      </h1>
      {admin && <Admin> Admin </Admin>}
      <FormContainer>
        <img src={userpicture} alt='profil' />
        <label htmlFor='image'>Photo de Profil</label>
        <input
          type='file'
          name='image'
          id='image'
          accept='.jpg, .jpeg, .png'
          onChange={(e) => setUserpicture(e.target.files[0])}
        />
      </FormContainer>
      <input type='submit' value='Enregistrer' onClick={() => handleSubmit()} />
    </Container>
  );
}

const Container = styled.div`
  height: 580px;
  grid-area: L;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;

  h1 {
    font-family: Roboto, sans-serif;
    font-size: 30px;
    line-height: 1.1;
    letter-spacing: .2rem;
    font-weight: 600;
    text-align: center;
    margin-top: 25px;
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
