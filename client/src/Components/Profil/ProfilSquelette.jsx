import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

export default function ProfilSquelette() {
  return (
    <Fragment>
      <Card>
        <Picture>
          <div className='photo'></div>
        </Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
        <div className='btn'></div>
      </Card>
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

const Card = styled.div`
  position: relative;
  width: 80%;
  height: 70%;
  margin: auto;
  background: url('../../asset/logo_planete.jpg') no-repeat center/cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
  border-radius: 10px;

  display: flex;
  flex-direction: row;

  .btn {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 30%;
    height: 40px;
    background-color: #4c4c4c;
    opacity: 0.8;
    animation: ${skeleton} 0.8s ease-in-out infinite alternate;
  }
`;

const Picture = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .photo {
    background-color: #4c4c4c;
    opacity: 0.8;
    width: 90%;
    height: 70%;
    border-radius: 50%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    animation: ${skeleton} 0.8s ease-in-out infinite alternate;
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 100%;

  h3,
  p {
    background-color: #4c4c4c;
    opacity: 0.8;
    margin: 0 auto;
    animation: ${skeleton} 0.8s ease-in-out infinite alternate;
  }

  h3 {
    width: 30%;
    height: 60px;
  }

  p {
    width: 50%;
    height: 30px;
  }
`;
