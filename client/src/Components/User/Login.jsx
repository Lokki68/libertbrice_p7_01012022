import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginUser } from '../../Api/user';
import { colors } from '../../Utils/styles/color';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      username,
      password,
    };

    loginUser(data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('groupomania-token', res.token);
          localStorage.setItem('groupomania-id', res.data.id);
          navigate('/');
        } else if (res.status === 401) {
          setErrorMessage(res.err)
        }else if (res.status === 402) {
          setErrorMessage(res.err)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Formulaire
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <h1>Se connecter</h1>
        </div>
        <div className='info'>
          <input
            type='text'
            name='username'
            id='username'
            placeholder="Nom d'utilisateur"
            required
            value={username}
            onInput={(e) => {
              setErrorMessage('')
              setUsername(e.target.value)
            }}
          />
        </div>

        <div className='info password'>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Votre mot de passe'
            required
            value={password}
            onInput={(e) => {
              setErrorMessage('')
              setPassword(e.target.value)
            }}
          />

        </div>
          <span className='error-span'>{errorMessage}</span>
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
  background: url('../../asset/logo_planete.jpg') no-repeat center/cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info input {
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    width: 80%;
  }

  .info.password input {
    margin-top: 15px;
  }
  
  .error-span {
    margin-top: 5px;
    color: ${colors.alert};
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
