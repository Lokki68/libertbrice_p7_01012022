import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import UpdateInfo from './UpdateInfo';
import UploadPicture from './UploadPicture';

export default function UpdateProfil({userData}) {

  
  return (
    <Container>
      <Content>
        <UploadPicture username={userData.username} userpicture={userData.image}  admin={userData.admin} />
        <UpdateInfo userData={userData} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 85%;
  width: 70%;
  border-radius: 4px;
  box-shadow: 5px 5px 12px ${colors.primary};
  background-color: rgba(128, 128, 128, 0.323);
`;

const Content = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr;
  grid-template-areas: 'L R';
`;
