import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import UpdateProfil from './UpdateProfil';

export default function MainProfil() {
  const { data } = useSelector((state) => state.userReducer);

  return <Container>{data ? <UpdateProfil userData={data} /> : ''}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 200px);
`;
