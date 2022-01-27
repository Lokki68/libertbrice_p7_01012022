import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LoginForm from './LoginForm';

export default function SignUpForm() {
  const [formSubmit, setFormSubmit] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [controlPassword, setControlPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    const usernameError = document.querySelector('.username-error');

    const confirmError = document.querySelector('.confirm-error');
    const validationError = document.querySelector('.validation-error');

    usernameError.innerHTML = '';
    confirmError.innerHTML = '';
    validationError.innerHTML = '';

    if (!username) {
      usernameError.innerHTML = '<p>Veuillez saisir votre Username</p>';
    } else if (username.length < 3) {
      usernameError.innerHTML = '<p>Un minimum de 3 caractères est requis</p>';
    } else if (password !== controlPassword) {
      confirmError.innerHTML = '<p>Les mots de passe ne correspondent pas</p>';
    } else {
      await axios({
        method: 'post',
        url: 'http://localhost:8080/api/user/signup',
        data: {
          username,
          password,
        },
      })
        .then((res) => {
          if (res.data.err) {
            console.log(res);

            validationError.innerHTML = `<p>${res.data.err}</p>`;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      {formSubmit ? (
        <LoginForm success='true' />
      ) : (
        <OverlayContainer>
          <Container>
            <h1>Inscription</h1>
            <FormWrapper onSubmit={handleRegister}>
              <UsernameForm>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Username ...'
                  onInput={(e) => setUsername(e.target.value)}
                />
              </UsernameForm>
              <UsernameError className='username-error'></UsernameError>
              <br />
              <PasswordForm>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password ...'
                  onInput={(e) => setPassword(e.target.value)}
                />
              </PasswordForm>
              <PasswordError className='password-error'></PasswordError>
              <br />
              <PasswordConfirmForm>
                <input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Confirm Password ...'
                  onInput={(e) => setControlPassword(e.target.value)}
                />
              </PasswordConfirmForm>
              <PasswordConfirmError className='confirm-error'></PasswordConfirmError>
              <br />
              <input type='submit' value='Valider Inscription' />
              <br />
              <ValidationError className='validation-error'></ValidationError>
            </FormWrapper>
          </Container>
        </OverlayContainer>
      )}
    </div>
  );
}

// ----- Styled

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(49, 49, 49, 0.8);
`;

const Container = styled.div`
  background: url('../../img/logo_planete.jpg') no-repeat center/cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 35%;
  min-width: 350px;
  height: 75%;
  transition-duration: 0.5s;
  box-shadow: 3px 3px 1px rgba(51, 51, 51, 0.5);
  z-index: 10;

  h1 {
    margin: 30px;
    font-family: Roboto, sans-serif;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Incosolata, sans-serif;
  font-size: 18px;
`;

const UsernameForm = styled.div``;

const UsernameError = styled.div`
  color: red;
  font-weight: 400;
`;

const PasswordForm = styled.div``;

const PasswordError = styled.div`
  color: red;
  font-weight: 400;
`;

const PasswordConfirmForm = styled.div``;

const PasswordConfirmError = styled.div`
  color: red;
  font-weight: 400;
`;

const ValidationError = styled.div`
  color: red;
  font-weight: 400;
`;
