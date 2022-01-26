import React from 'react';
import styled from 'styled-components';

export default function LoginForm() {
  return (
    <OverlayContainer>
      <Container>
        <h1>Connexion</h1>
        <FormWrapper>
          <UsernameForm>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username ...'
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
            />
          </PasswordForm>
          <PasswordError className='password-error'></PasswordError>
          <br />

          <input type='submit' value='Connexion' />
          <br />
          <ConnexionError className='connexion-error'></ConnexionError>
        </FormWrapper>
      </Container>
    </OverlayContainer>
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

const ConnexionError = styled.div`
  color: red;
  font-weight: 400;
`;
