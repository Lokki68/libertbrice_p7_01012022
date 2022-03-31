import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../Utils/styles/color';

export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Formulaire>
        <div>
          <h1>Se connecter</h1>
        </div>
        <div className='info'>
          <input
            type='text'
            name='username'
            id='username'
            placeholder="Nom d'utilisateur"
            value={username}
            onInput={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className='info password'>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Votre mot de passe'
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Envoyer</button>
      </Formulaire>
    </Container>
  );
}

// ----- Styled

const Container = styled.div`
  height: calc(90vh - 90px);
  width: 100%;
`;

const Formulaire = styled.form`
  width: 30%;
  height: 75%;
  margin: 50px auto;
  padding: 20px;
  background: url('../../img/logo_planete.jpg') no-repeat center/cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info input {
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    width: 80%;
  }

  .info.password input {
    margin-top: 15px;
  }

  button {
    border: none;
    color: #fff;
    background-color: ${colors.tertiary};
    box-shadow: 2px 2px 2px ${colors.black}, inset 2px 2px 2px ${colors.primary};
    font-size: 20px;
    font-family: Roboto, sans-serif;
    margin: 0 15px;

    &:hover {
      box-shadow: 2px 2px 2px ${colors.primary},
        inset 2px 2px 2px ${colors.black};
      color: ${colors.black};
    }
  }
`;
