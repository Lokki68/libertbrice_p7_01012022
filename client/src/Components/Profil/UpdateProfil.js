import React from 'react';
import styled from 'styled-components';
import UpdateInfo from './UpdateInfo';
import UploadPicture from './UploadPicture';

export default function UpdateProfil() {
  return (
    <Container>
      <Content>
        <UploadPicture />
        <UpdateInfo />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 85%;
  width: 70%;
  border-radius: 4px;
  box-shadow: 5px 5px 12px #fcd4d3;
  background-color: rgba(128, 128, 128, 0.323);
`;

const Content = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr;
  grid-template-areas: 'L R';
`;
