import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

export default function ProfilFormSquelette() {
  return (
    <Fragment>
      <Formulaire>
        <div className='info'></div>
        <div className='info'></div>
        <div className='info password'></div>
        <div className='btn'>Envoyer</div>
      </Formulaire>
    </Fragment>
  );
}

// ----- Keyframes

const skeleton = keyframes`
  to{
    opacity:.4;
  }
`;

// ----- Styled

const Formulaire = styled.div`
  width: 50%;
  height: 75%;
  margin: 50px auto;
  padding: 20px;
  background: url('../../asset/logo_planete.jpg') no-repeat center/cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info {
    width: 80%;
    height: 40px;
    margin: 0 auto;
    background-color: #4c4c4c;
    opacity: 0.8;
    animation: ${skeleton} 0.8s ease-in-out infinite alternate;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 40px;
    margin: 0 auto;
    border-radius: 5px;
    color: #fff;
    background-color: #4c4c4c;
    opacity: 0.8;
    animation: ${skeleton} 0.8s ease-in-out infinite alternate;
  }
`;
