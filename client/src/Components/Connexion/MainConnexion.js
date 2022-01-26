import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function MainConnexion() {
  const [signUpModal, setsignUpModal] = useState(false); //inscription
  const [loginModal, setLoginModal] = useState(false); //Connexion

  const inscriptModal = (e) => {
    setsignUpModal(!signUpModal);
  };

  const connexionModal = (e) => {
    setLoginModal(!loginModal);
  };

  return (
    <MainContainer>
      <Content>
        {signUpModal && <SignUpForm />}
        {loginModal && <LoginForm />}
        <ConnexionBar>
          <span className='inscription'>
            <button className='' onClick={inscriptModal} disabled={loginModal}>
              Inscription
            </button>
          </span>
          <span className='connexion'>
            <button
              className=''
              onClick={connexionModal}
              disabled={signUpModal}
            >
              Connexion
            </button>
          </span>
        </ConnexionBar>
      </Content>
    </MainContainer>
  );
}

// ----- Styled


const MainContainer = styled.div`
  width: 100%;
  height: 85vh;
  background: url('../../img/photo_entreprise.jpg') no-repeat center/cover;
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ConnexionBar = styled.div`
  position: absolute;
  bottom: 125px;
  width: 100%;
  height: 90px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-template-areas: 'i c';
  text-align: center;

  button {
    font-family: Roboto, sans-serif;
    margin: 20px;
    border-radius: 4px;
    width: 223px;
    height: 60px;
    box-shadow: 5px 5px 15px 2px #040404, inset 3px 3px 20px 1px #040404;

    &:hover,
    &:active {
      box-shadow: inset 3px 3px 20px 1px #fcd4d3;
      background-color: #040404;
      color: #fff;
    }

    &.is-active {
      box-shadow: inset 3px 3px 20px 1px #fcd4d3;
      background-color: #040404;
      color: #fff;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
