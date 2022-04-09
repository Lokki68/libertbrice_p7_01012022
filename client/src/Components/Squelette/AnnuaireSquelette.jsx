import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../Utils/styles/color';

export default function AnnuaireSquelette() {
  return (
    <Fragment>
      <Card>
        <Picture></Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
      </Card>
      <Card>
        <Picture></Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
      </Card>
      <Card>
        <Picture></Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
      </Card>
      <Card>
        <Picture></Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
      </Card>
      <Card>
        <Picture></Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
      </Card>
      <Card>
        <Picture></Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
      </Card>
      <Card>
        <Picture></Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
      </Card>
      <Card>
        <Picture></Picture>
        <InfoCard>
          <h3></h3>
          <p></p>
          <p></p>
        </InfoCard>
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
  display: flex;
  min-width: 330px;
  max-width: 330px;
  height: 115px;
  margin: 20px;
  border-radius: 4px;
  background-color: ${colors.primary};
  opacity: 0.8;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;

const Picture = styled.div`
  height: 100%;
  background-color: #4c4c4c;
  width: 100px;
  border-radius: 4px 0 0 4px;
  opacity: 0.8;
  animation: ${skeleton} 0.8s ease-in-out infinite alternate;
`;

const InfoCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  width: 85%;

  h3,
  p {
    width: 60%;
    background-color: #4c4c4c;
    opacity: 0.8;
    animation: ${skeleton} 0.8s ease-in-out infinite alternate;
  }

  h3 {
    height: 15px;
  }

  p {
    margin-top: 10px;
    height: 10px;
  }
`;
